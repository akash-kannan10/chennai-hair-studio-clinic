import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
          Ready to Restore Your Hair?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
          Book your free consultation today and take the first step toward confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            size="xl"
            className="bg-background text-primary hover:bg-background/90 shadow-elevated"
            asChild
          >
            <a href="#locations" className="gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Appointment
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/90">
          <span>Or call us directly:</span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+917305571103"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 73055 71103
            </a>
            <span>|</span>
            <a
              href="tel:+916381255757"
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 63812 55757
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
