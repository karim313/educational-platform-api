import Image from "next/image";
import Link from "next/link";
import { Play, Users, Clock } from "lucide-react";

export default function Home() {
  const categories = [
    "Web Development",
    "UI/UX Design",
    "Data Science",
    "Mobile Dev",
    "Business",
  ];

  return (
    <div className="flex flex-col items-center bg-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center gap-8">
        <div className="relative w-full max-w-2xl aspect-4/3 rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50 transform hover:scale-[1.01] transition-transform duration-500">
          <Image
            src="/images/thoughtful-bearded-guy-holds-books-looks-pensively-thinks-about-how-make-project-brainstorms-different-ideas-mind.jpg"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Learn Anytime, <br className="hidden md:block" /> Anywhere
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Unlock your potential with industry-leading courses designed for the
            modern world. Master frontend, design, and logic from the best.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <Link
            href="/courses"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 text-center"
          >
            Browse Courses
          </Link>
          <Link
            href="/register?role=instructor"
            className="px-10 py-4 bg-gray-50 text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 text-center"
          >
            Become an Instructor
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 px-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Premium Learning Experience
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              Our platform provides the tools you need to succeed in your career
              with features built for the modern learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <FeatureCard
              icon={<Play className="w-6 h-6 text-blue-600" />}
              title="Online Courses"
              description="Access thousands of video lessons from your pocket, 24/7."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-blue-600" />}
              title="Expert Instructors"
              description="Learn from professionals with years of real-world industry experience."
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              title="Lifetime Access"
              description="Study at your own pace with no expiration dates on your courses."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Ready to start learning?
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              Join over 10,000 students today and start your journey to becoming
              a professional developer.
            </p>
          </div>
          <Link
            href="/register"
            className="inline-block px-12 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="w-full py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <h2 className="text-2xl font-black text-gray-900">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-6 py-3 bg-white border border-gray-100 rounded-full text-gray-600 font-bold hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 group">
      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-black text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
    </div>
  );
}
