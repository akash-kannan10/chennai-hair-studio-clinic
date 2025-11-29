import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, MapPin, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    branch: "",
    date: "",
    time: "",
    message: "",
    consent: false,
  });

  const services = [
    "Hair Transplant (FUE/Micro-FUE)",
    "PRP Therapy",
    "GFC Treatment",
    "Beard Transplant",
    "Female Hair Transplant",
    "Dandruff/Scalp Treatment",
    "Laser Hair Reduction",
    "Hair Fall Diagnosis",
    "Hair Regrowth Solutions",
  ];

  const timeSlots = [
    "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM",
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Please accept the terms",
        description: "You must agree to the Privacy Policy and Terms to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Booking Confirmed!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const minDate = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">Booking Confirmed!</h3>
        <p className="text-muted-foreground mb-6">
          Check your email for confirmation details.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Select Service *</Label>
        <Select
          required
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Select Branch *</Label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, branch: "chennai" })}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              formData.branch === "chennai"
                ? "border-primary bg-secondary"
                : "border-border hover:border-primary/50"
            }`}
          >
            <MapPin className="w-5 h-5 text-primary mb-2" />
            <div className="font-semibold">Chennai</div>
            <div className="text-sm text-muted-foreground">Pallikaranai</div>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, branch: "trichy" })}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              formData.branch === "trichy"
                ? "border-primary bg-secondary"
                : "border-border hover:border-primary/50"
            }`}
          >
            <MapPin className="w-5 h-5 text-primary mb-2" />
            <div className="font-semibold">Trichy</div>
            <div className="text-sm text-muted-foreground">Thillai Nagar</div>
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="date"
              type="date"
              required
              min={minDate}
              max={maxDate}
              className="pl-10"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Preferred Time *</Label>
          <Select
            required
            value={formData.time}
            onValueChange={(value) => setFormData({ ...formData, time: value })}
          >
            <SelectTrigger className="pl-10">
              <Clock className="absolute left-3 w-5 h-5 text-muted-foreground" />
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Special Requests (Optional)</Label>
        <Textarea
          id="message"
          placeholder="Any specific concerns or questions..."
          maxLength={200}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, consent: checked as boolean })
          }
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
          I agree to the Privacy Policy and Terms of Service. I consent to being contacted via phone, email, or WhatsApp regarding my appointment.
        </Label>
      </div>

      <Button type="submit" variant="hero" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Confirm Appointment"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Or call us directly at{" "}
        <a href="tel:+917305571103" className="text-primary font-medium">
          +91 73055 71103
        </a>
      </p>
    </form>
  );
};

export default BookingForm;
