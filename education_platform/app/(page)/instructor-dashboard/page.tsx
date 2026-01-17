import React from "react";
import Image from "next/image";
import {
    Bell,
    Users,
    BookOpen,
    PlusCircle,
    MoreVertical,
    LayoutDashboard,
    Book,
    BarChart2,
    Settings,
} from "lucide-react";
import DialogDemo from "@/components/dialog";

export default function InstructorDashboard() {
    const publishedCourses = [
        {
            id: 1,
            title: "Advanced React Patterns",
            students: "1,240",
            status: "Published",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=200&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Mastering TypeScript 5.0",
            students: "856",
            status: "Published",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=200&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Next.js 14 Deep Dive",
            students: "0",
            status: "Draft",
            image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                                alt="Instructor"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-gray-900">Instructor Dashboard</h2>
                            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Alex Rivera</p>
                        </div>
                    </div>
                    <button className="p-3 bg-gray-50 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all relative">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-blue-600 border-2 border-white rounded-full" />
                    </button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                        icon={<Users className="w-6 h-6" />}
                        label="Total Students"
                        value="12,840"
                        color="blue"
                    />
                    <StatCard
                        icon={<BookOpen className="w-6 h-6" />}
                        label="Active Courses"
                        value="14"
                        color="indigo"
                    />
                    <StatCard
                        icon={<BarChart2 className="w-6 h-6" />}
                        label="Total Revenue"
                        value="$42,500"
                        color="emerald"
                    />
                </div>

                {/* Add Course CTA */}
              
                <DialogDemo/>

                {/* Published Courses */}
                <div className="space-y-6">
                    <div className="flex items-end justify-between px-2">
                        <div>
                            <h3 className="text-2xl font-black text-gray-900">Your Courses</h3>
                            <p className="text-sm font-medium text-gray-400">Manage and track your content</p>
                        </div>
                        <button className="text-blue-600 text-sm font-black uppercase tracking-widest hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {publishedCourses.map((course) => (
                            <div
                                key={course.id}
                                className={`flex items-center gap-6 p-4 bg-white border border-gray-100 rounded-3xl group hover:border-blue-100 transition-all ${course.status === "Draft" ? "opacity-75 grayscale-[0.5]" : ""}`}
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden relative shrink-0">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grow">
                                    <h4 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {course.title}
                                    </h4>
                                    <div className="flex items-center gap-4 mt-2">
                                        <div className="flex items-center gap-1.5 text-gray-400 font-bold text-xs uppercase tracking-wider">
                                            <Users className="w-3.5 h-3.5" />
                                            {course.students}
                                        </div>
                                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${course.status === "Published"
                                            ? "bg-green-50 text-green-600"
                                            : "bg-gray-100 text-gray-500"
                                            }`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${course.status === "Published" ? "bg-green-600 animate-pulse" : "bg-gray-400"}`} />
                                            {course.status}
                                        </div>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                    <MoreVertical className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Mobile Sidebar Mockup (Bottom Bar) */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex justify-between items-center md:hidden z-50">
                <NavIcon icon={<LayoutDashboard />} label="Home" active />
                <NavIcon icon={<Book />} label="Courses" />
                <NavIcon icon={<BarChart2 />} label="Analytics" />
                <NavIcon icon={<Settings />} label="Settings" />
            </nav>
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
    const colors: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        indigo: "bg-indigo-50 text-indigo-600",
        emerald: "bg-emerald-50 text-emerald-600",
    };

    return (
        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-50/50 transition-all group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${colors[color]}`}>
                {icon}
            </div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            <p className="text-3xl font-black text-gray-900 tabular-nums">{value}</p>
        </div>
    );
}

function NavIcon({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`flex flex-col items-center gap-1 group w-16 transition-all ${active ? "text-blue-600" : "text-gray-400 hover:text-blue-600"}`}>
            <div className={`transition-transform group-hover:scale-110 ${active ? "fill-blue-50/50" : ""}`}>
                {icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
            {active && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />}
        </button>
    );
}
