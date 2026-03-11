import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        name: "Amit Sharma",
        role: "Hair Transplant Patient",
        review: "The FUE procedure by Dr. Ravi Jaybhaye was life-changing. Very professional and the results are incredibly natural. Best hair transplant centre in Pune!",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Pooja Deshpande",
        role: "Skin Allergy Patient",
        review: "I had a chronic skin allergy for years. Dr. Ravi diagnosed it correctly in the first visit and now my skin is completely clear. Highly recommended!",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
        name: "Rahul Kulkarni",
        role: "Acne Treatment",
        review: "Excellent service at the Kharadi branch. The laser treatment for my acne scars worked wonders. The staff is very polite and helpful.",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm italic">Testimonials</p>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                        What Our Patients Say About Their Experience
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation */}
                    <div className="absolute top-1/2 -left-4 lg:-left-20 -translate-y-1/2 z-10 hidden sm:block">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft"
                        >
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-4 lg:-right-20 -translate-y-1/2 z-10 hidden sm:block">
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="glass-card p-10 lg:p-16 flex flex-col items-center text-center relative"
                        >
                            <Quote className="absolute top-10 right-10 text-secondary" size={60} />

                            <div className="w-24 h-24 rounded-full border-4 border-secondary overflow-hidden mb-8 shadow-lg">
                                <img src={reviews[currentIndex].photo} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex items-center gap-1 text-yellow-500 mb-6">
                                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-xl lg:text-2xl text-text-primary italic leading-relaxed mb-8 max-w-2xl font-medium">
                                "{reviews[currentIndex].review}"
                            </p>

                            <div>
                                <h4 className="text-xl font-heading font-bold text-primary">{reviews[currentIndex].name}</h4>
                                <p className="text-text-secondary text-sm uppercase tracking-[0.1em] font-bold mt-1">{reviews[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-secondary"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
