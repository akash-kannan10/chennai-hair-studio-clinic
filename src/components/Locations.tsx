import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const branches = [
    {
      name: "Chennai Branch",
      area: "Pallikaranai",
      address: "3, Selvam Nagar, Pallikaranai, Chennai, Tamil Nadu 600100",
      phone: "+91 63812 55757",
      hours: "7:00 AM - 7:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9962449426397!2d80.20456!3d12.9371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzEzLjYiTiA4MMKwMTInMTYuNCJF!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.google.com/?q=3,+Selvam+Nagar,+Pallikaranai,+Chennai,+Tamil+Nadu+600100",
    },
    {
      name: "Trichy Branch",
      area: "Thillai Nagar",
      address: "37, 11th Cross E Rd, Srinivasapuram, West Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018",
      phone: "+91 73055 71103",
      altPhone: "+91 63812 55757",
      hours: "7:00 AM - 7:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4947!2d78.6833!3d10.8017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzA2LjEiTiA3OMKwNDEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
      directionsUrl: "https://maps.google.com/?q=37,+11th+Cross+E+Rd,+Srinivasapuram,+West+Thillai+Nagar,+Tiruchirappalli,+Tamil+Nadu+620018",
    },
  ];

  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Visit Us at Either Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convenient locations in Chennai and Trichy with expert care at both branches
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft"
            >
              {/* Map */}
              <div className="h-64 bg-muted">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Location`}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{branch.name}</h3>
                    <p className="text-primary font-medium">{branch.area}</p>
                  </div>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Navigation className="w-5 h-5 text-primary" />
                  </a>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                      {branch.altPhone && (
                        <>
                          <span className="text-muted-foreground mx-2">|</span>
                          <a href={`tel:${branch.altPhone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition-colors">
                            {branch.altPhone}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">{branch.hours}</span>
                  </div>
                </div>

                <Button variant="hero" className="w-full" asChild>
                  <a
                    href={
                      branch.area === "Pallikaranai"
                        ? "https://calendar.app.google/uDv3RrUdqmjEHY9M8"
                        : "https://calendar.app.google/JvMkE8DYS4tbagtM7"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book {branch.area} Appointment
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
