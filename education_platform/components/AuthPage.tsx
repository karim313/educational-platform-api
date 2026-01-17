"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, EyeOff, Eye, Github, Mail } from "lucide-react";

export default function AuthPage({ mode = "signin" }: { mode?: "signin" | "signup" }) {
    const [showPassword, setShowPassword] = useState(false);
    const isSignIn = mode === "signin";

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {/* Top Header */}
            <div className="w-full max-w-lg px-4 py-8 flex items-center justify-between">
                <Link href="/" className="p-2 -ml-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <h2 className="text-xl font-black text-gray-900 absolute left-1/2 -translate-x-1/2">
                    EduPlatform
                </h2>
                <div className="w-10" /> {/* Spacer */}
            </div>

            <div className="w-full max-w-md px-6 flex flex-col items-center">
                {/* Headline */}
                <div className="text-center space-y-3 mb-10">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                        {isSignIn ? "Welcome Back" : "Create Account"}
                    </h1>
                    <p className="text-gray-500 font-medium leading-relaxed">
                        {isSignIn
                            ? "Enter your credentials to access your account and start building."
                            : "Join 10,000+ students and start your educational journey today."}
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex w-full h-14 p-1 bg-gray-50 rounded-2xl mb-8 border border-gray-100/50">
                    <Link
                        href="/signin"
                        className={`flex-1 flex items-center justify-center rounded-xl font-black text-sm transition-all ${isSignIn ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/register"
                        className={`flex-1 flex items-center justify-center rounded-xl font-black text-sm transition-all ${!isSignIn ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                    >
                        Sign Up
                    </Link>
                </div>

                {/* Form */}
                <form className="w-full space-y-6">
                    {!isSignIn && (
                        <div className="space-y-2">
                            <label className="text-sm font-black text-gray-900 ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full h-14 px-5 bg-gray-50 border-2 border-transparent focus:border-blue-100 focus:bg-white focus:ring-4 focus:ring-blue-50/50 rounded-2xl font-medium transition-all outline-none text-gray-900"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-black text-gray-900 ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full h-14 px-5 bg-gray-50 border-2 border-transparent focus:border-blue-100 focus:bg-white focus:ring-4 focus:ring-blue-50/50 rounded-2xl font-medium transition-all outline-none text-gray-900"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-black text-gray-900">Password</label>
                            {isSignIn && (
                                <Link href="#" className="text-sm font-black text-blue-600 hover:text-blue-700">
                                    Forgot?
                                </Link>
                            )}
                        </div>
                        <div className="relative group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full h-14 px-5 bg-gray-50 border-2 border-transparent focus:border-blue-100 focus:bg-white focus:ring-4 focus:ring-blue-50/50 rounded-2xl font-medium transition-all outline-none text-gray-900 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <button className="w-full h-14 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 shadow-lg shadow-blue-100/50">
                        {isSignIn ? "Sign In" : "Create Account"}
                    </button>
                </form>

                {/* Divider */}
                <div className="w-full py-10 flex items-center gap-4">
                    <div className="h-px grow bg-gray-100" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
                        Or continue with
                    </span>
                    <div className="h-px grow bg-gray-100" />
                </div>

                {/* Social */}
                <div className="w-full grid grid-cols-2 gap-4">
                    <button className="h-14 flex items-center justify-center gap-3 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/10 transition-all group">
                        <Github className="w-5 h-5 text-gray-900 group-hover:text-blue-600" />
                        <span className="text-sm font-black text-gray-900">GitHub</span>
                    </button>
                    <button className="h-14 flex items-center justify-center gap-3 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/10 transition-all group">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        <span className="text-sm font-black text-gray-900">Google</span>
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-12 text-center text-xs text-gray-400 font-medium leading-relaxed pb-10">
                    By continuing, you agree to our <br />
                    <Link href="#" className="text-blue-600 font-bold hover:underline">Terms of Service</Link> and
                    <Link href="#" className="text-blue-600 font-bold hover:underline"> Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}
