import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Hair Transplant (FUE)",
        category: "Surgical",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
        size: "lg",
    },
    {
        title: "Chronic Fungal Infection",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600",
        size: "sm",
    },
    {
        title: "Acne & Scar Treatment",
        category: "Cosmetic",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
        size: "sm",
    },
    {
        title: "Laser Hair Removal",
        category: "Aesthetics",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600",
        size: "sm",
    },
    {
        title: "PRP for Hair Loss",
        category: "Trichology",
        image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=800",
        size: "md",
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-secondary/30">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl space-y-6">
                        <p className="text-accent font-body font-black uppercase tracking-[0.4em] text-[10px] italic">Clinical Innovation</p>
                        <h2 className="text-4xl lg:text-6xl font-heading font-black text-primary leading-[1.15]">
                            Architectural <span className="text-accent italic font-medium">Treatment</span> <br />
                            Solutions
                        </h2>
                    </div>
                    <p className="text-text-secondary max-w-sm font-body text-base leading-relaxed border-l-4 border-accent/20 pl-6">
                        Bridging medical expertise with advanced technology for transformative dermatology and hair restoration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 h-auto md:h-[800px]">
                    {/* Main Large Card */}
                    <ServiceCard service={services[0]} className="md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto" />

                    {/* Smaller Grid Cards */}
                    <ServiceCard service={services[1]} className="md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto" />
                    <ServiceCard service={services[2]} className="md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto" />
                    <ServiceCard service={services[3]} className="md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto" />

                    {/* Bottom Wide Card */}
                    <ServiceCard service={services[4]} className="md:col-span-6 md:row-span-1 aspect-[3/1] md:aspect-auto" />
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, className }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className={`group relative rounded-[2rem] overflow-hidden shadow-soft cursor-pointer bg-white ${className}`}
    >
        <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500" />

        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent font-body font-bold text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.category}
                </p>
                <div className="flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-heading font-bold text-white leading-tight max-w-[200px]">
                        {service.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-accent hover:border-accent">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default Services;
