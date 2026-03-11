import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactBar = () => {
    return (
        <section className="relative z-20 max-w-[1200px] mx-auto px-6 -mt-10">
            <div className="glass-card p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-secondary">
                {/* Contact */}
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary font-medium mb-1 uppercase tracking-wider">Contact</p>
                        <p className="font-bold text-primary">072489 36958</p>
                        <p className="text-xs text-text-secondary">contact@drravi-skinclinic.com</p>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-5 md:pl-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary font-medium mb-1 uppercase tracking-wider">Kharadi Branch</p>
                        <p className="font-bold text-primary">PROSPERO Building, 303</p>
                        <p className="text-xs text-text-secondary">Dholepatil Farms Rd, Pune</p>
                    </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-5 md:pl-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-text-secondary font-medium mb-1 uppercase tracking-wider">Working Hours</p>
                        <p className="font-bold text-primary">Mon – Sat: 09:00 – 21:00</p>
                        <p className="text-xs text-text-secondary">Split shifts (Click for details)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBar;
