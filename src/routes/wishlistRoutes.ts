import { Request, Response, Router } from 'express';
import Wishlist from '../models/Wishlist';
import { authenticate } from '../middleware/auth';

const router = Router();

// Controller
const addToWishlist = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.body;
        const wishlist = new Wishlist({ user: req.user?.id, course: courseId });
        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error: any) {
        if (error.code === 11000) res.status(400).json({ message: 'Already in wishlist' });
        else res.status(500).json({ message: error.message });
    }
};

const getWishlist = async (req: Request, res: Response) => {
    try {
        const wishlist = await Wishlist.find({ user: req.user?.id }).populate('course');
        res.status(200).json(wishlist);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const removeFromWishlist = async (req: Request, res: Response) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Removed from wishlist' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Routes
/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Wishlist management
 */
router.get('/', authenticate, getWishlist);
router.post('/', authenticate, addToWishlist);
router.delete('/:id', authenticate, removeFromWishlist);

export default router;
