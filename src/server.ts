import app from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/edu-platform';

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
        });
    } catch (error) {
        console.error('❌ Database connection error:', error);
        process.exit(1);
    }
};

startServer();
