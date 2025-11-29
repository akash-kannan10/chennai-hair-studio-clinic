import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrimaryServices from "@/components/PrimaryServices";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Chennai Hair Studio Clinic",
    "image": "https://chennaihairsudioclinic.com/og-image.jpg",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "3, Selvam Nagar, Pallikaranai",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600100",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "37, 11th Cross E Rd, Srinivasapuram, West Thillai Nagar",
        "addressLocality": "Tiruchirappalli",
        "addressRegion": "Tamil Nadu",
        "postalCode": "620018",
        "addressCountry": "IN"
      }
    ],
    "telephone": ["+916381255757", "+917305571103"],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200"
    },
    "openingHours": "Mo-Su 07:00-19:00",
    "medicalSpecialty": "Hair Restoration"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of hair transplant in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hair transplant procedures start from ₹30,000 to ₹50,000, significantly lower than the market rate of ₹80,000 to ₹1,50,000."
        }
      },
      {
        "@type": "Question",
        "name": "How long is recovery after hair transplant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients can return to light work within 2-3 days after the procedure. Full recovery takes about 2 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What is PRP therapy and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PRP (Platelet-Rich Plasma) therapy involves extracting your blood, processing it to concentrate the platelets, and injecting it into your scalp to stimulate hair follicles and promote new hair growth."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Hair Transplant Chennai & Trichy | PRP, GFC Treatment | Chennai Hair Studio Clinic</title>
        <meta
          name="description"
          content="Advanced & affordable hair restoration. Hair transplant from ₹30K, PRP ₹1K, GFC ₹1.5K. 25K+ patients, 4.8★ rating. Book free consultation in Chennai or Trichy."
        />
        <meta name="keywords" content="hair transplant chennai, hair transplant trichy, PRP therapy, GFC treatment, hair loss treatment, micro fue, beard transplant" />
        <link rel="canonical" href="https://chennaihairsstudioclinic.com" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero />
        <PrimaryServices />
        <ServicesGrid />
        <WhyChooseUs />
        <BeforeAfterGallery />
        <Pricing />
        <Testimonials />
        <Locations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Index;
