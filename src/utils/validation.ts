import { z } from 'zod';

export const registerSchema = z.object({
    body: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
        role: z.enum(['student', 'teacher', 'admin']).optional(),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
});

export const courseSchema = z.object({
    body: z.object({
        title: z.string().min(3),
        description: z.string().min(10),
        price: z.number().min(0),
        category: z.string(),
        lessons: z.array(
            z.object({
                title: z.string(),
                content: z.string(),
                videoUrl: z.string().optional(),
                duration: z.number().optional(),
            })
        ).optional(),
    }),
});
