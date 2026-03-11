import React from "react";
import { Smile, Award, ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        icon: Smile,
        value: "99%",
        label: "Patient Satisfaction",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: Award,
        value: "15+",
        label: "Years Experience",
        color: "bg-orange-50 text-orange-600",
    },
    {
        icon: ShieldCheck,
        value: "15k+",
        label: "Successful Procedures",
        color: "bg-green-50 text-green-600",
    },
    {
        icon: Building2,
        value: "02",
        label: "Pune Branches",
        color: "bg-purple-50 text-purple-600",
    },
];

const Statistics = () => {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 text-center group transition-all duration-300 hover:border-accent/30"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg] ${stat.color}`}>
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                            <p className="text-text-secondary font-medium uppercase tracking-wider text-xs">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
