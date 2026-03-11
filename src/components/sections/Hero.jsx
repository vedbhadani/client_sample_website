import React from "react";
import Button from "../ui/Button";
import { Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 bg-accent/10 px-5 py-2.5 rounded-full text-accent font-body font-bold text-xs uppercase tracking-[0.2em] italic">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            "One Life, One Skin, Respect it."
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black text-primary leading-tight lg:leading-[1.2] tracking-tight">
                            <span className="block lg:inline sm:whitespace-nowrap">Swiss Skin Centre:</span> <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Expert</span> Care for All Skin Types
                        </h1>

                        <p className="text-base sm:text-lg text-text-secondary font-body leading-relaxed max-w-lg">
                            Led by Dr. Ravi Jaybhaye, we bridge medical precision with aesthetic excellence in Pune, specializing in chronic skin treatments and advanced hair transplant technology.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Button variant="primary" size="lg" className="px-10 py-6 rounded-2xl shadow-soft gap-3 group">
                            Book Appointment
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="px-10 py-6 rounded-2xl border-2">
                            View Services
                        </Button>
                    </div>

                    {/* Trust Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-6 p-6 glass-card border-white shadow-xl max-w-sm"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="space-y-1.5 text-left">
                            <div className="flex items-center gap-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={15} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-xs text-text-secondary font-body font-bold italic leading-tight">
                                "Pune's most trusted skin & hair transplant specialist"
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    {/* Architectural Frame */}
                    <div className="absolute -inset-8 bg-primary/5 rounded-[3rem] -z-10 blur-2xl" />
                    <div className="absolute top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />

                    <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] border-[16px] border-white shadow-elegant">
                        <img
                            src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800"
                            alt="Swiss Skin Centre Consultation"
                            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* Floating Success Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 lg:-left-20 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6 border-b-4 border-accent"
                    >
                        <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-white shadow-lg rotate-3">
                            <Star size={32} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-4xl font-black text-primary leading-tight">4.9/5</p>
                            <p className="text-[10px] text-text-secondary font-body font-black uppercase tracking-[0.2em] mt-1">Patient Excellence</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
