import { Button } from "@/components/ui/button";
import { Phone, Calendar, Award, Users, Star, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const trustBadges = [
    { icon: Award, label: "20+ Years", value: "Experience" },
    { icon: Users, label: "25K+", value: "Happy Patients" },
    { icon: Star, label: "4.8★", value: "Google Rating" },
    { icon: Shield, label: "US-FDA", value: "Approved Tech" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      <div className="container-wide relative z-10 pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                Chennai & Trichy's Trusted Hair Restoration Clinic
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Regain Your Hair.
              <span className="text-primary block mt-2">Regain Your Confidence.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Advanced & affordable hair restoration with PRP, GFC & Micro-FUE transplants.
              Expert care at Chennai & Trichy locations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#locations" className="gap-2 w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:+917305571103" className="gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call +91 73055 71103
                </a>
              </Button>
            </div>
          </div>

          {/* Video Placeholder */}
          {/* Video */}
          <div className="relative aspect-video bg-black/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm animate-fade-in">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              controls
              muted
              playsInline
              src="/Hero Video CHSC.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Trust Badges - Centered Below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all hover:-translate-y-1 text-center"
            >
              <badge.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-xl font-bold text-primary">{badge.label}</div>
              <div className="text-sm text-muted-foreground">{badge.value}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Hero;
