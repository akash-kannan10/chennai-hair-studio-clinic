import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya S.",
      location: "Chennai",
      rating: 5,
      text: "Amazing results! I was skeptical at first but the doctors here are truly experts. My hair looks completely natural and the price was so reasonable.",
      timeAgo: "2 months ago",
    },
    {
      name: "Rajesh K.",
      location: "Trichy",
      rating: 5,
      text: "Best decision I ever made. The PRP treatment worked wonders for my thinning hair. Staff is friendly and professional.",
      timeAgo: "1 month ago",
    },
    {
      name: "Arjun M.",
      location: "Chennai",
      rating: 5,
      text: "Had my hair transplant done here. The procedure was smooth, minimal pain, and recovery was quick. Highly recommend!",
      timeAgo: "3 months ago",
    },
    {
      name: "Shalini R.",
      location: "Coimbatore",
      rating: 5,
      text: "As a woman dealing with hair loss, I was embarrassed to seek help. The team here made me feel comfortable and the GFC treatment is showing great results.",
      timeAgo: "2 weeks ago",
    },
    {
      name: "Vikram N.",
      location: "Chennai",
      rating: 5,
      text: "Excellent clinic with state-of-the-art equipment. Dr. was very thorough in explaining the procedure. Worth every rupee!",
      timeAgo: "1 month ago",
    },
    {
      name: "Deepa L.",
      location: "Trichy",
      rating: 5,
      text: "I traveled from Trichy for my treatment and it was absolutely worth it. The results speak for themselves. Thank you team!",
      timeAgo: "3 weeks ago",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real patients who trusted us with their hair restoration journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-lg font-semibold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{review.timeAgo}</span>
                <span className="text-primary font-medium flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Posted on Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
