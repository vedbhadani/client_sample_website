import React from "react";
import Button from "../ui/Button";
import { CheckCircle2, PlayCircle, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    const points = [
        "Expert in Chronic Skin Diseases",
        "Advanced Hair Transplant Surgery",
        "State-of-the-art Laser Centre",
        "Patient-Focused, Cost-Effective Care",
    ];

    return (
        <section id="about" className="section-padding bg-secondary/50">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left: Images */}
                <div className="relative order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-2xl overflow-hidden aspect-square shadow-lg border-4 border-white"
                        >
                            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" alt="Swiss Skin Centre Treatment" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-2xl overflow-hidden aspect-square shadow-lg border-4 border-white sm:mt-12"
                        >
                            <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" alt="Doctor Consultation" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Stats Card Overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute -bottom-10 -right-6 lg:right-10 glass-card p-6 flex items-center gap-4 z-10"
                    >
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                            <Users size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">15+</p>
                            <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">Medical Staff</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <p className="text-accent font-bold uppercase tracking-[0.2em] text-xs italic">About Swiss Skin Centre</p>
                        <h2 className="text-4xl lg:text-5xl font-heading font-black text-primary leading-[1.2]">
                            Leading <span className="text-accent">Dermatology</span> & Hair Transplant Excellence
                        </h2>
                        <p className="text-text-secondary leading-relaxed text-lg font-body">
                            Swiss Skin Centre, led by Dr. Ravi Jaybhaye, is Pune's premier destination for advanced dermatology. We specialize in precision diagnosis and transformative treatments for chronic skin conditions and aesthetic hair restoration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <CheckCircle2 className="text-accent shrink-0" size={22} />
                                <span className="text-text-primary font-bold text-sm tracking-tight">{point}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-8 pt-6">
                        <Button variant="primary" size="lg" className="px-10 py-5 rounded-2xl">About Our Clinic</Button>
                        <button className="flex items-center gap-4 text-primary font-black text-sm uppercase tracking-widest hover:text-accent transition-all group">
                            <PlayCircle className="text-accent group-hover:scale-110 transition-transform duration-300" size={36} />
                            Launch Tour
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
