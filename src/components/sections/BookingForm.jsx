import React from "react";
import Button from "../ui/Button";
import { Send, Calendar, User, Phone, Mail, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const BookingForm = () => {
    return (
        <section id="appointment" className="section-padding bg-secondary/50">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-2xl">
                    {/* Info Side */}
                    <div className="lg:col-span-2 bg-primary p-10 lg:p-16 text-white space-y-8 flex flex-col justify-center relative overflow-hidden">
                        {/* Abstract Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-4xl font-heading font-bold leading-tight">Book Your Consultation Today</h2>
                            <p className="text-white/80 leading-relaxed text-lg">
                                Take the first step towards your skin health journey. Fill out the form and our team will contact you within 24 hours to confirm your appointment.
                            </p>

                            <div className="space-y-6 pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Flexible Scheduling</p>
                                        <p className="text-sm text-white/70">Pick a date that works best for you.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold">Expert Care</p>
                                        <p className="text-sm text-white/70">Consult with professional dermatologists.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-3 bg-white p-10 lg:p-16">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-12 pr-4 text-text-primary focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                        <input
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-12 pr-4 text-text-primary focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                        <input
                                            type="email"
                                            placeholder="email@example.com"
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-12 pr-4 text-text-primary focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                        <input
                                            type="date"
                                            className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-12 pr-4 text-text-primary focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Treatment Type</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                                    <select className="w-full bg-secondary/50 border-none rounded-2xl py-4 pl-12 pr-4 text-text-primary appearance-none focus:ring-2 focus:ring-accent/20 transition-all outline-none">
                                        <option value="">Select a treatment</option>
                                        <option value="skin">Chronic Skin Disease</option>
                                        <option value="hair">Hair Transplant (FUE/FUT)</option>
                                        <option value="laser">Laser Hair Removal</option>
                                        <option value="cosmetic">Cosmetic Procedure</option>
                                        <option value="other">Other Consultation</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-primary uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className="w-full bg-secondary/50 border-none rounded-2xl py-4 px-6 text-text-primary focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <Button variant="primary" size="lg" className="w-full gap-2 py-5 text-lg">
                                Book Consultation <ChevronRight size={20} />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
