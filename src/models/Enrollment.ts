import mongoose, { Schema, Document } from 'mongoose';

export interface IEnrollment extends Document {
    user: mongoose.Types.ObjectId;
    course: mongoose.Types.ObjectId;
    enrolledAt: Date;
    completedLessons: mongoose.Types.ObjectId[]; // List of completed lesson IDs
    progress: number; // Percentage 0-100
}

const EnrollmentSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
        completedLessons: [{ type: Schema.Types.ObjectId }],
        progress: { type: Number, default: 0 },
    },
    { timestamps: { createdAt: 'enrolledAt', updatedAt: true } }
);

// Prevent double enrollment
EnrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

export default mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);
