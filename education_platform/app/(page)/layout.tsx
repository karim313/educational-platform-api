import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CourseProvider } from "@/app/context/courseContext";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CourseProvider>
            <div className="min-h-screen flex flex-col pt-16">
                <Navbar />
                <main className="grow">
                    {children}
                </main>
                <Footer />
            </div>
        </CourseProvider>
    );
}

