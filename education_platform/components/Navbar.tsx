"use client";

import Link from "next/link";
import { Search, User, GraduationCap } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-black text-gray-900">EduPlatform</span>
                    </Link>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href="/courses" className="hidden sm:block text-sm font-black text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-widest px-4">
                            Courses
                        </Link>
                        <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link href="/signin" className="p-2 text-gray-500 hover:text-blue-600 transition-colors border-2 border-transparent hover:border-blue-100 rounded-full">
                            <User className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
