import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-secondary pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Clinic Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                            <span className="text-white font-heading font-bold text-xl">R</span>
                        </div>
                        <span className="text-xl font-heading font-bold text-primary max-w-[200px] leading-tight sm:max-w-none">Dr. J. Ravi's Skin Clinic</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed italic font-medium">
                        "One Life, One skin, Respect it."
                    </p>
                    <p className="text-text-secondary leading-relaxed text-sm">
                        Swiss Skin Centre is led by Dr. Ravi Jaybhaye, providing advanced dermatological care, hair transplants, and cosmetic laser treatments across two branches in Pune.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/dr.jravi_skin_clinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-soft">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-primary mb-6">Our Services</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Hair Transplant (FUE)</a></li>
                        <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Chronic Fungal Infections</a></li>
                        <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Acne & Scar Treatment</a></li>
                        <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">PRP for Hair Loss</a></li>
                        <li><a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm">Laser Hair Removal</a></li>
                    </ul>
                </div>

                {/* Branches */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-primary mb-6">Our Branches</h4>
                    <ul className="space-y-6">
                        <li className="space-y-2">
                            <div className="flex items-center gap-2 text-accent">
                                <MapPin size={16} />
                                <span className="font-bold text-xs uppercase tracking-wider">Kharadi (Main)</span>
                            </div>
                            <p className="text-text-secondary text-xs leading-relaxed">
                                3rd floor, PROSPERO building, 303, Dholepatil Farms Rd, near MOUNT N GLORY, Pune 411014
                            </p>
                        </li>
                        <li className="space-y-2">
                            <div className="flex items-center gap-2 text-accent">
                                <MapPin size={16} />
                                <span className="font-bold text-xs uppercase tracking-wider">Wagholi Branch</span>
                            </div>
                            <p className="text-text-secondary text-xs leading-relaxed">
                                Ground Floor, Oxy Primo Building, Bakori Phata, Nagar Road, Wagholi, Pune 412207
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-heading font-bold text-primary mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Phone className="text-accent shrink-0" size={20} />
                            <span className="text-text-secondary font-bold">072489 36958</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-accent shrink-0" size={20} />
                            <span className="text-text-secondary text-sm">contact@drravi-skinclinic.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 mt-20 pt-8 border-t border-secondary text-center">
                <p className="text-text-secondary text-xs">
                    &copy; {new Date().getFullYear()} Dr. J. Ravi's Skin Clinic (Swiss Skin Centre). All rights reserved. Professional Care for Your Skin.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
