import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User, { UserRole } from '../models/User';
import Course from '../models/Course';
import Enrollment from '../models/Enrollment';
import Review from '../models/Review';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/edu-platform';

const seed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('🌱 Connected to DB for seeding');

        // Clear existing data
        await User.deleteMany({});
        await Course.deleteMany({});
        await Enrollment.deleteMany({});
        await Review.deleteMany({});

        console.log('🧹 Cleared existing data');

        // Create Users
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@edu.com',
            passwordHash: 'password123',
            role: UserRole.ADMIN,
        });

        const teacher1 = await User.create({
            name: 'John Teacher',
            email: 'teacher1@edu.com',
            passwordHash: 'password123',
            role: UserRole.TEACHER,
        });

        const teacher2 = await User.create({
            name: 'Jane Teacher',
            email: 'teacher2@edu.com',
            passwordHash: 'password123',
            role: UserRole.TEACHER,
        });

        const students = await Promise.all(
            Array.from({ length: 5 }).map((_, i) =>
                User.create({
                    name: `Student ${i + 1}`,
                    email: `student${i + 1}@edu.com`,
                    passwordHash: 'password123',
                    role: UserRole.STUDENT,
                })
            )
        );

        console.log('👤 Created Users');

        // Create Courses
        const courses = await Promise.all(
            Array.from({ length: 10 }).map((_, i) =>
                Course.create({
                    title: `Course Title ${i + 1}`,
                    description: `This is a comprehensive course about topic ${i + 1}.`,
                    teacher: i % 2 === 0 ? teacher1._id : teacher2._id,
                    price: (i + 1) * 10,
                    category: i % 2 === 0 ? 'Programming' : 'Design',
                    lessons: [
                        { title: 'Intro', content: 'Welcome', duration: 5 },
                        { title: 'Deep DIve', content: 'Details...', duration: 50 },
                    ],
                })
            )
        );

        console.log('📚 Created Courses');

        // Enrollments & Reviews
        // Enroll student 1 in course 1
        await Enrollment.create({
            user: students[0]._id,
            course: courses[0]._id,
        });

        // Review from student 1 on course 1
        await Review.create({
            user: students[0]._id,
            course: courses[0]._id,
            rating: 5,
            comment: 'Great course!',
        });

        console.log('📝 Created Enrollments and Reviews');

        console.log('✅ Seeding complete');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding error:', error);
        process.exit(1);
    }
};

seed();
