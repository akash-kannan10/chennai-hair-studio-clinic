import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the cost of hair transplant in Chennai?",
      answer: "Our hair transplant procedures start from ₹30,000 to ₹50,000, significantly lower than the market rate of ₹80,000 to ₹1,50,000. The exact cost depends on the number of grafts required, which is determined during your free consultation. We offer transparent pricing with no hidden costs.",
    },
    {
      question: "How long is recovery after hair transplant?",
      answer: "Most patients can return to light work within 2-3 days after the procedure. The transplanted area heals within 7-10 days, and the tiny scabs fall off naturally. Full recovery takes about 2 weeks, but you can resume most normal activities within a few days.",
    },
    {
      question: "Is the hair transplant procedure painful?",
      answer: "The procedure is performed under local anesthesia, so you won't feel any pain during the transplant. You may experience mild discomfort or soreness afterward, which is easily managed with prescribed medications. Most patients report the procedure is much more comfortable than they expected.",
    },
    {
      question: "What is PRP therapy and how does it work?",
      answer: "PRP (Platelet-Rich Plasma) therapy involves extracting your blood, processing it to concentrate the platelets, and injecting it into your scalp. The growth factors in PRP stimulate hair follicles, promote new hair growth, and improve hair thickness. It's a non-surgical treatment with minimal downtime.",
    },
    {
      question: "What is GFC treatment and how is it different from PRP?",
      answer: "GFC (Growth Factor Concentrate) is an advanced version of PRP therapy. It provides a higher concentration of growth factors and is processed to activate the platelets before injection. This results in more potent hair growth stimulation and often faster, better results compared to traditional PRP.",
    },
    {
      question: "How many grafts will I need for my hair transplant?",
      answer: "The number of grafts needed varies based on the extent of hair loss, the size of the recipient area, and your desired density. During your free consultation, our doctors will assess your scalp and provide an accurate estimate. Typically, patients need between 1,500 to 4,000 grafts.",
    },
    {
      question: "How soon will I see results after treatment?",
      answer: "For hair transplants, initial growth appears around 3-4 months, with significant improvement at 6-8 months. Full results are visible at 12-18 months. For PRP/GFC treatments, visible improvement typically occurs within 3-6 months with regular sessions.",
    },
    {
      question: "Do you offer financing or EMI options?",
      answer: "Yes, we understand hair restoration is an investment in your confidence. We offer flexible payment plans and can help arrange EMI options through various financing partners. Please discuss your requirements during the consultation, and we'll find a payment plan that works for you.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-section font-semibold text-foreground mb-4">
            Common Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to frequently asked questions about our treatments
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 shadow-soft"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
