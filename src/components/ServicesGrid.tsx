import {
  Scissors,
  Droplets,
  Sparkles,
  UserCircle,
  Heart,
  ShieldCheck,
  Zap,
  Search,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Transplant",
      description: "Micro-FUE technology for natural-looking results",
    },
    {
      icon: Droplets,
      title: "PRP Therapy",
      description: "Stimulate growth with platelet-rich plasma",
    },
    {
      icon: Sparkles,
      title: "GFC Treatment",
      description: "Advanced growth factor concentrate therapy",
    },
    {
      icon: UserCircle,
      title: "Beard Transplant",
      description: "Fuller, natural beard with precision grafting",
    },
    {
      icon: Heart,
      title: "Female Hair Transplant",
      description: "Specialized solutions for women's hair loss",
    },
    {
      icon: ShieldCheck,
      title: "Scalp Treatment",
      description: "Dandruff & scalp health solutions",
    },
    {
      icon: Zap,
      title: "Laser Hair Reduction",
      description: "Permanent unwanted hair removal",
    },
    {
      icon: Search,
      title: "Hair Fall Diagnosis",
      description: "Comprehensive analysis & treatment plan",
    },
    {
      icon: TrendingUp,
      title: "Hair Regrowth",
      description: "Advanced regrowth solutions & therapy",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Complete Hair Restoration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your hair care needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href="#locations"
              className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
