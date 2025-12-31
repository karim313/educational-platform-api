import { Request, Response } from 'express';
import Course from '../models/Course';
import { UserRole } from '../models/User';

export const createCourse = async (req: Request, res: Response) => {
    try {
        const { title, description, price, category, lessons } = req.body;

        // Ensure only teachers/admins can create
        // (Middleware should handle this, but double check logic if needed)

        const course = new Course({
            title,
            description,
            price,
            category,
            lessons,
            teacher: req.user?.id,
        });

        await course.save();
        res.status(201).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getCourses = async (req: Request, res: Response) => {
    try {
        // Pagination & Filtering could be added here
        const courses = await Course.find().populate('teacher', 'name email');
        res.status(200).json(courses);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params.id).populate('teacher', 'name email');
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check ownership
        if (course.teacher.toString() !== req.user?.id && req.user?.role !== UserRole.ADMIN) {
            return res.status(403).json({ message: 'Not authorized to update this course' });
        }

        Object.assign(course, req.body);
        await course.save();
        res.status(200).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check ownership
        if (course.teacher.toString() !== req.user?.id && req.user?.role !== UserRole.ADMIN) {
            return res.status(403).json({ message: 'Not authorized to delete this course' });
        }

        await course.deleteOne();
        res.status(200).json({ message: 'Course deleted' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
