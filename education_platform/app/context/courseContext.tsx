'use client';

import React, { createContext, useState, useContext, ReactNode } from "react";

interface Course {
    id?: string | number;
    title?: string;
    description?: string;
    price?: string | number;
    image?: string;
    status?: string;
    students?: string | number;
}

interface CourseContextType {
    course: Course | null;
    setCourse: (course: Course | null) => void;
}

export const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
    const [course, setCourse] = useState<Course | null>(null);

    return (
        <CourseContext.Provider value={{ course, setCourse }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourse = () => {
    const context = useContext(CourseContext);
    if (context === undefined) {
        throw new Error("useCourse must be used within a CourseProvider");
    }
    return context;
};
