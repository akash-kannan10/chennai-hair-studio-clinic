import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const services = [
    "Hair Transplant",
    "PRP Therapy",
    "GFC Treatment",
    "Beard Transplant",
    "Female Hair Transplant",
    "Scalp Treatment",
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Results Gallery", href: "#results" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Book Appointment", href: "#locations" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4 -ml-5">
              <img src="/symbol logo.png" alt="Chennai Hair Studio Symbol" className="h-12 w-auto" />
              <img src="/zoomed text logo.png" alt="Chennai Hair Studio Text" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Advanced & affordable hair restoration with 10+ years of expertise. Trusted by 25,000+ patients across Chennai & Trichy.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Chennai-hair-studio-clinic-100091270226359/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/chennaihairstudioclinic/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@chennaihairstudioclinic7074" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-background/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-background">Chennai</p>
                    <p className="text-background/70 text-sm">3, Selvam Nagar, Pallikaranai</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-background">Trichy</p>
                    <p className="text-background/70 text-sm">37, 11th Cross E Rd, Thillai Nagar</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+917305571103" className="text-background/70 hover:text-primary transition-colors">
                    +91 73055 71103
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Chennai Hair Studio Clinic. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
