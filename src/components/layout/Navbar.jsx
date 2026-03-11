import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "../../lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Treatments", href: "#treatments" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"
            )}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 max-w-[70%] sm:max-w-none">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-white font-heading font-bold text-xl">R</span>
                    </div>
                    <span className="text-lg sm:text-xl font-body font-bold text-primary truncate sm:whitespace-nowrap">
                        Dr. J. Ravi's Skin Clinic
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-text-primary font-medium hover:text-accent transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button variant="primary" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Appointment
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 border-t border-secondary">
                    <div className="flex flex-col gap-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button variant="primary" className="w-full mt-4">
                            Book Appointment
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
