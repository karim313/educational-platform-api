import { Request, Response } from 'express';
import User, { UserRole } from '../models/User';
import jwt from 'jsonwebtoken';

const generateToken = (user: any) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
        expiresIn: '1d',
    });
};

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Allow admin creation only via specific flow or seed in real app, but for now allow it.
        // Or restrict 'admin' role registration if needed. 
        // For this portfolio, we will allow it but maybe warn.

        const user = new User({
            name,
            email,
            passwordHash: password, // Pre-save hook will hash it
            role: role || UserRole.STUDENT,
        });

        await user.save();

        const token = generateToken(user);
        res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
