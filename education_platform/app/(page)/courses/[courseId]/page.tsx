export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="bg-zinc-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <nav className="flex gap-2 text-sm text-blue-400 font-medium">
                            <a href="/courses">Courses</a>
                            <span>/</span>
                            <a href="#">Development</a>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            The Complete 2026 Web Development Bootcamp
                        </h1>
                        <p className="text-xl text-zinc-300">
                            Become a Full-Stack Web Developer with just ONE course. HTML, CSS, JS, Node, React, MongoDB, Web3 and DApps
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex items-center gap-2 text-yellow-400">
                                <span className="font-bold">4.8</span>
                                <div className="flex">★★★★★</div>
                                <span className="text-zinc-400">(152,432 ratings)</span>
                            </div>
                            <div className="text-zinc-300">854,231 students</div>
                        </div>
                        <p className="text-zinc-300">Created by <span className="text-blue-400 underline cursor-pointer">Dr. Angela Yu</span></p>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-2xl border border-zinc-200 dark:border-zinc-800 text-black dark:text-white">
                            <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl mb-6 flex items-center justify-center text-zinc-400">
                                Preview Video
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">$19.99</span>
                                    <span className="text-zinc-500 line-through">$84.99</span>
                                    <span className="text-red-500 font-bold">75% off</span>
                                </div>
                                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                                    Add to Cart
                                </button>
                                <button className="w-full py-4 border-2 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-bold rounded-xl transition-colors">
                                    Buy Now
                                </button>
                                <p className="text-center text-xs text-zinc-500">30-Day Money-Back Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Content */}
            <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <div className="p-8 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Build 16 web development projects for your portfolio",
                                "Master React, Node, and Express",
                                "Learn professional developer best practices",
                                "Work with NoSQL databases like MongoDB",
                                "Deploy your applications to the cloud",
                                "Create beautiful user interfaces with Tailwind CSS"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span className="text-zinc-600 dark:text-zinc-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">Course content</h2>
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5].map((section) => (
                                <div key={section} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-between cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900">
                                    <div className="flex items-center gap-4">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-bold">{section}</span>
                                        <span className="font-medium">Section {section}: Introduction to Web Development</span>
                                    </div>
                                    <span className="text-zinc-500 text-sm">12 lectures • 45min</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
