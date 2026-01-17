'use client'
import Image from "next/image";
import { Search, ChevronDown, Sparkles, Star, Clock, GraduationCap, Palette } from "lucide-react";

export default function CoursesPage() {
    const courses = [
        {
            id: 1,
            title: "Mastering Tailwind CSS",
            description: "Build modern, responsive websites faster than ever with utility-first CSS principles.",
            price: "$49.99",
            rating: 4.9,
            reviews: "1.2k",
            tag: "Bestseller",
            tagIcon: <Sparkles className="w-3 h-3" />,
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Advanced React Patterns",
            description: "Deep dive into hooks, state machines, and compound components for scalable apps.",
            price: "FREE",
            rating: 4.8,
            reviews: "850",
            tag: "12 Hours",
            tagIcon: <Clock className="w-3 h-3" />,
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "JavaScript Fundamentals",
            description: "Master the core concepts of JS: execution context, closures, and async programming.",
            price: "$59.99",
            rating: 5.0,
            reviews: "2.4k",
            tag: "Certificate",
            tagIcon: <GraduationCap className="w-3 h-3" />,
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1000&auto=format&fit=crop",
        },
        {
            id: 4,
            title: "UI/UX Principles",
            description: "Learn design systems, hierarchy, and accessibility to build user-centered products.",
            price: "$39.99",
            rating: 4.7,
            reviews: "540",
            tag: "Design System",
            tagIcon: <Palette className="w-3 h-3" />,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Search and Filters Header */}
            <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search courses (e.g., React, CSS)..."
                            className="w-full h-12 pl-12 pr-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 text-gray-900 transition-all"
                        />
                    </div>

                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md shadow-blue-100 whitespace-nowrap">
                            All Topics
                        </button>
                        {["Frontend", "UI Design", "React", "Mobile", "Backend"].map((topic) => (
                            <button
                                key={topic}
                                className="px-5 py-2 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-full text-sm font-bold flex items-center gap-2 transition-colors whitespace-nowrap"
                            >
                                {topic}
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <main className="max-w-7xl mx-auto px-4 py-8 grow w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 flex flex-col group"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-sm font-black text-blue-600 shadow-sm">
                                    {course.price}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-1.5 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">
                                    {course.tagIcon}
                                    {course.tag}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2 mb-6">
                                    {course.description}
                                </p>
                                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="text-sm font-black text-gray-900">{course.rating}</span>
                                        <span className="text-xs font-bold text-gray-400">({course.reviews})</span>
                                    </div>
                                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-100">
                                        View Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
