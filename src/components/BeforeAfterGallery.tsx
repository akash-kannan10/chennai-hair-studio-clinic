import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      id: 1,
      age: 30,
      months: 9,
      treatment: "Hair Transplant",
      before: "/patient images/HT/before.jpg",
      after: "/patient images/HT/after.png",
    },
    {
      id: 2,
      age: 28,
      months: 6,
      treatment: "PRP Therapy",
      before: "/patient images/PRP/before.png",
      after: "/patient images/PRP/after.png",
    },
    {
      id: 3,
      age: 29,
      months: 8,
      treatment: "GFC Treatment",
      before: "/patient images/GFC/before.png",
      after: "/patient images/GFC/after.png",
    },
    {
      id: 4,
      age: 26,
      months: 7,
      treatment: "Beard Transplant",
      before: "/patient images/BT/before.png",
      after: "/patient images/BT/after.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="results" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Real Results from Real Patients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Swipe through verified transformations from our clinic
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="w-full shrink-0 px-4">
                  <div className="bg-muted rounded-2xl overflow-hidden">
                    {/* Before/After Images Container */}
                    <div className="grid grid-cols-2 gap-1">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={caseItem.before}
                          alt="Before treatment"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={caseItem.after}
                          alt="After treatment"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Case Info */}
                    <div className="p-6 bg-card">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex gap-6">
                          <div>
                            <div className="text-sm text-muted-foreground">Age</div>
                            <div className="font-semibold">{caseItem.age} years</div>
                          </div>

                          <div>
                            <div className="text-sm text-muted-foreground">Result</div>
                            <div className="font-semibold">{caseItem.months} months</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Treatment</div>
                          <div className="font-semibold text-primary">{caseItem.treatment}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card shadow-elevated rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-card shadow-elevated rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rating Bar */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-2xl font-bold">4.8</span>
          </div>
          <p className="text-muted-foreground mb-4">Based on 200+ Google Reviews</p>

        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          * All images displayed with patient permission. Individual results may vary.
          Images are representative of typical outcomes.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
