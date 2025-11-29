import { 
  CheckCircle, 
  TrendingUp, 
  Microscope, 
  Award, 
  IndianRupee, 
  Clock 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Natural-Looking Results",
      description: "Expert hairline design and precision grafting for results that look completely natural.",
    },
    {
      icon: TrendingUp,
      title: "95%+ Graft Survival Rate",
      description: "Industry-leading success rates through advanced techniques and careful handling.",
    },
    {
      icon: Microscope,
      title: "Advanced Micro-FUE Technology",
      description: "Minimally invasive procedure with faster healing and no visible scarring.",
    },
    {
      icon: Award,
      title: "Expert Certified Doctors",
      description: "20+ years of specialized experience in hair restoration procedures.",
    },
    {
      icon: IndianRupee,
      title: "Transparent Affordable Pricing",
      description: "Honest pricing at 40-60% below typical market rates without compromising quality.",
    },
    {
      icon: Clock,
      title: "Fast Recovery & Healing",
      description: "Return to normal activities quickly with our advanced post-care protocols.",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Why 25,000+ Patients Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of expert care and proven results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
