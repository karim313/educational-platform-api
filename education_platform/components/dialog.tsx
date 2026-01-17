'use client'

import { Label } from "@radix-ui/react-label"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "./ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { Input } from "./ui/input"
import { PlusCircle, Book, FileText, DollarSign } from "lucide-react"


export default function DialogDemo() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full p-8 bg-blue-600 text-white rounded-3xl flex items-center justify-center gap-4 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-[0.98] group shadow-xl shadow-blue-100/50 border-none">
                        <PlusCircle className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                        <span className="text-xl font-black tracking-tight">Add New Course</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none shadow-2xl rounded-3xl bg-white">
                    <div className="bg-blue-600 p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                        <DialogHeader className="relative z-10 text-left">
                            <DialogTitle className="text-2xl font-black tracking-tight">Create New Course</DialogTitle>
                            <DialogDescription className="text-blue-100 font-medium">
                                Fill in the details below to launch your new masterpiece.
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="course-title" className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center gap-2">
                                    <Book className="w-4 h-4 text-blue-600" />
                                    Course Title
                                </Label>
                                <Input
                                    id="course-title"
                                    name="titleCourse"
                                    placeholder="e.g. Advanced TypeScript Patterns"
                                    className="h-12 px-4 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="course-desc" className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-blue-600" />
                                    Description
                                </Label>
                                <Input
                                    id="course-desc"
                                    name="descriptionCourse"
                                    placeholder="Briefly describe what students will learn..."
                                    className="h-12 px-4 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="course-price" className="text-sm font-black text-gray-700 uppercase tracking-widest flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-blue-600" />
                                    Price ($)
                                </Label>
                                <Input
                                    id="course-price"
                                    name="priceCourse"
                                    type="number"
                                    placeholder="99.99"
                                    className="h-12 px-4 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <DialogFooter className="pt-4 flex items-center gap-3">
                            <DialogClose asChild>
                                <Button variant="ghost" className="h-12 px-6 rounded-xl font-bold text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all basis-1/3">
                                    Discard
                                </Button>
                            </DialogClose>
                            <Button type="submit" className="h-12 px-8 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98] basis-2/3">
                                Publish Course
                            </Button>
                        </DialogFooter>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}

