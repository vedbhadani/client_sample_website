import React from "react";
import Button from "../ui/Button";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const DoctorProfile = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
                    {/* Doctor Image */}
                    <div className="relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                            alt="Dr. Ravi Jaybhaye"
                            className="w-full h-full object-cover"
                        />
                        {/* Experience Badge */}
                        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl shadow-soft">
                            <p className="text-xl sm:text-3xl font-bold text-primary italic leading-none">12+</p>
                            <p className="text-[8px] sm:text-[10px] font-bold text-text-secondary uppercase tracking-widest mt-1">Years Experience</p>
                        </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-12 lg:p-20 space-y-10 flex flex-col justify-center">
                        <div className="space-y-6">
                            <p className="text-accent font-bold uppercase tracking-[0.3em] text-[10px]">Medical Director</p>
                            <h2 className="text-4xl lg:text-6xl font-heading font-black text-primary leading-none">Dr. Ravi Jaybhaye</h2>
                            <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg border-l-4 border-accent">
                                <p className="text-text-primary font-bold text-sm tracking-wide">
                                    MBBS, DDV, PGDCC, FAM (Mumbai)
                                </p>
                                <p className="text-accent font-bold text-[10px] uppercase tracking-widest mt-1">
                                    Consultant Dermatologist & Hair Transplant Surgeon
                                </p>
                            </div>
                        </div>

                        <p className="text-text-secondary leading-relaxed text-lg font-body italic">
                            "With over 12 years of clinical excellence, our mission is to provide world-class dermatological care through precise diagnosis and advanced medical innovation."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="font-black text-primary text-xs uppercase tracking-widest">Expertise</p>
                                    <p className="text-sm text-text-secondary font-medium">Dermatology & Lasers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                    <Award size={24} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="font-black text-primary text-xs uppercase tracking-widest">Specialist</p>
                                    <p className="text-sm text-text-secondary font-medium">Hair Transplant Surgeon</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-6">
                            <Button variant="primary" size="lg" className="px-10 rounded-2xl">View Experience</Button>
                            <Button variant="outline" size="lg" className="px-10 rounded-2xl border-2">Read Publications</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;
