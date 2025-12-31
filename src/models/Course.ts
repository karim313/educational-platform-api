import mongoose, { Schema, Document } from 'mongoose';

export interface ILesson {
    title: string;
    content: string; // URL or text
    videoUrl?: string;
    duration: number; // in minutes
}

export interface ICourse extends Document {
    title: string;
    description: string;
    teacher: mongoose.Types.ObjectId;
    price: number;
    category: string;
    lessons: ILesson[];
    studentsEnrolled: mongoose.Types.ObjectId[];
}

const LessonSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    videoUrl: { type: String },
    duration: { type: Number, default: 0 },
});

const CourseSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        price: { type: Number, required: true, min: 0 },
        category: { type: String, required: true },
        lessons: [LessonSchema],
        studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true }
);

export default mongoose.model<ICourse>('Course', CourseSchema);
