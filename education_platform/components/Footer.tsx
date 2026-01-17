import { Award, Video, AtSign } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
                <div className="flex items-center gap-8">
                    <Award className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                    <Video className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                    <AtSign className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                </div>
                <p className="text-gray-400 text-sm text-center">
                    © 2024 EduPlatform Inc. Designed for Frontend Portfolios.
                </p>
            </div>
        </footer>
    );
}
