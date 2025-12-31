import { Request, Response } from 'express';
import Enrollment from '../models/Enrollment';
import Course from '../models/Course';

export const enrollCourse = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.body;
        const userId = req.user?.id;

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const enrollment = new Enrollment({
            user: userId,
            course: courseId,
        });

        await enrollment.save();

        // Add to course students list
        course.studentsEnrolled.push(userId as any);
        await course.save();

        res.status(201).json(enrollment);
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Already enrolled' });
        }
        res.status(500).json({ message: error.message });
    }
};

export const getMyEnrollments = async (req: Request, res: Response) => {
    try {
        const enrollments = await Enrollment.find({ user: req.user?.id })
            .populate('course', 'title description teacher')
            .populate('course.teacher', 'name');
        res.status(200).json(enrollments);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateProgress = async (req: Request, res: Response) => {
    try {
        const { courseId, lessonId } = req.body;
        const userId = req.user?.id;

        const enrollment = await Enrollment.findOne({ user: userId, course: courseId });
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }

        if (!enrollment.completedLessons.includes(lessonId)) {
            enrollment.completedLessons.push(lessonId);

            // Recalculate progress
            const course = await Course.findById(courseId);
            if (course && course.lessons.length > 0) {
                enrollment.progress = Math.round((enrollment.completedLessons.length / course.lessons.length) * 100);
            }

            await enrollment.save();
        }

        res.status(200).json(enrollment);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
