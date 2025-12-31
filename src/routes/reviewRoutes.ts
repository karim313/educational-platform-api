import { Request, Response, Router } from 'express';
import Review from '../models/Review';
import { authenticate } from '../middleware/auth';

const router = Router();

const addReview = async (req: Request, res: Response) => {
    try {
        const { courseId, rating, comment } = req.body;
        const review = new Review({ user: req.user?.id, course: courseId, rating, comment });
        await review.save();
        res.status(201).json(review);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const getCourseReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find({ course: req.params.courseId }).populate('user', 'name');
        res.status(200).json(reviews);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Routes
/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Course reviews
 */
router.get('/:courseId', getCourseReviews);
router.post('/', authenticate, addReview);

export default router;
