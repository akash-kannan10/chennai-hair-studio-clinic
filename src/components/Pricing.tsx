import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Hair Transplant",
      subtitle: "Micro-FUE Technology",
      price: "₹30,000",
      priceEnd: "₹50,000",
      note: "Based on grafts needed",
      marketPrice: "₹80,000 - ₹1,50,000",
      features: [
        "Free consultation & analysis",
        "Micro-FUE technique",
        "95%+ graft survival rate",
        "Post-operative care included",
        "12-month follow-up",
      ],
      cta: "Get Custom Quote",
      popular: true,
    },
    {
      title: "PRP Therapy",
      subtitle: "Platelet-Rich Plasma",
      price: "₹1,000",
      priceEnd: null,
      note: "Per session",
      marketPrice: "₹3,000 - ₹6,000",
      features: [
        "Advanced PRP extraction",
        "Stimulates hair follicles",
        "No downtime required",
        "Visible results in 3-6 months",
        "Package discounts available",
      ],
      cta: "Book PRP Session",
      popular: false,
    },
    {
      title: "GFC Treatment",
      subtitle: "Growth Factor Concentrate",
      price: "₹1,500",
      priceEnd: null,
      note: "Per session",
      marketPrice: "₹4,000 - ₹8,000",
      features: [
        "Superior to traditional PRP",
        "Higher concentration of growth factors",
        "Faster visible results",
        "Boosts hair density",
        "Combined treatment options",
      ],
      cta: "Book GFC Session",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Honest, Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing significantly below market rates, without compromising on quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-6 md:p-8 flex flex-col h-full overflow-visible ${plan.popular
                ? "ring-2 ring-primary shadow-glow"
                : "shadow-soft"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-20">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">Starting</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-success">{plan.price}</span>
                  {plan.priceEnd && (
                    <>
                      <span className="text-muted-foreground">–</span>
                      <span className="text-2xl font-bold text-success">{plan.priceEnd}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.note}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="line-through">{plan.marketPrice}</span>
                  <span className="ml-2">typical market rate</span>
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full mt-auto"
                asChild
              >
                <a href="#locations">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          * Prices are indicative and based on individual assessment. Final pricing determined after consultation.
          Competitor pricing researched from leading clinics in Chennai.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
