import BookingForm from "./BookingForm";
import { Shield, Clock, Award } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="book" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
              Book Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step toward restoring your hair and confidence. Our expert doctors will assess your needs and create a personalized treatment plan.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Free Assessment</h3>
                  <p className="text-muted-foreground">
                    Comprehensive scalp analysis and personalized treatment recommendations at no cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">30-Minute Sessions</h3>
                  <p className="text-muted-foreground">
                    Efficient appointments that respect your time while addressing all your concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Doctors</h3>
                  <p className="text-muted-foreground">
                    Consult with specialists who have 20+ years of experience in hair restoration.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-4">Prefer to talk?</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Chennai:</span>{" "}
                  <a href="tel:+916381255757" className="text-primary hover:underline">+91 63812 55757</a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Trichy:</span>{" "}
                  <a href="tel:+917305571103" className="text-primary hover:underline">+91 73055 71103</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elevated border border-border">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
