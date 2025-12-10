import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Star } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/symbol logo.png" alt="Chennai Hair Studio Symbol" className="h-12 w-auto" />
            <img src="/zoomed text logo.png" alt="Chennai Hair Studio Text" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">4.8</span>
            </div>
            <a href="tel:+917305571103" className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 73055 71103</span>
            </a>
            <Button variant="hero" size="sm" asChild>
              <a href="#locations">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4 animate-fade-in h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+917305571103" className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="w-4 h-4" />
                  +91 73055 71103
                </a>
                <Button variant="hero" asChild>
                  <a href="#locations">Book Free Consultation</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
