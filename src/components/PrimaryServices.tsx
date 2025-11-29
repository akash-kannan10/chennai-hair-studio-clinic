import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Check, ArrowRight } from "lucide-react";

const PrimaryServices = () => {
  const services = [
    {
      icon: Droplets,
      title: "PRP Hair Loss Therapy",
      description: "Platelet-Rich Plasma therapy stimulates your natural hair growth using your body's own healing factors.",
      benefits: [
        "Stimulates natural hair growth",
        "Non-surgical, minimal downtime",
        "Fast results in 3-6 months",
      ],
      price: "₹1,000",
      marketPrice: "₹3,000 - ₹6,000",
    },
    {
      icon: Sparkles,
      title: "GFC Hair Treatment",
      description: "Growth Factor Concentrate - the next generation of hair restoration therapy, superior to traditional PRP.",
      benefits: [
        "Advanced growth factor concentrate",
        "Superior to traditional PRP",
        "Boosts hair density & thickness",
      ],
      price: "₹1,500",
      marketPrice: "₹4,000 - ₹8,000",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Our Most Advanced Treatments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge hair restoration therapies at prices significantly below market rates
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 md:p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Starting</span>
                      <span className="text-3xl font-bold text-primary">{service.price}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span className="line-through opacity-70">{service.marketPrice}</span>
                      <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-bold">Save 60%</span>
                    </div>
                  </div>
                  <Button variant="default" className="rounded-full px-6 group/btn shadow-md hover:shadow-lg" asChild>
                    <a href="#locations">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrimaryServices;
