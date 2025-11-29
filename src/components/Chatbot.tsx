import { useState, useEffect, useRef } from "react";
import { X, Send, MessageSquare, User, Bot, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const KNOWLEDGE_BASE = [
    {
        keywords: ["hi", "hello", "hey", "greetings", "start"],
        response: "Hello! Welcome to Chennai Hair Studio Clinic. I'm your virtual assistant. How can I help you today? I can answer questions about our services, pricing, locations, or help you book a consultation."
    },
    {
        keywords: ["price", "cost", "how much", "rates", "pricing", "expensive"],
        response: "We pride ourselves on being extremely affordable without compromising quality. \n\n• Hair Transplants: Start from ₹30,000 (market rate is often ₹80k+).\n• PRP Therapy: ₹1,000 per session.\n• GFC Treatment: ₹1,500 per session.\n\nExact costs depend on your specific needs (graft count, etc.). Would you like to book a free consultation to get a quote?"
    },
    {
        keywords: ["service", "treatment", "offer", "what do you do", "prp", "gfc", "transplant", "fue"],
        response: "We offer a comprehensive range of hair restoration services:\n\n• Hair Transplants: Advanced FUE & Micro-FUE techniques for natural results.\n• PRP Therapy: Platelet-Rich Plasma for hair loss control & regrowth.\n• GFC Treatment: Growth Factor Concentrate for superior results.\n• Beard Transplants: For density and styling.\n• Female Hair Transplants: Specialized care for women.\n• Dandruff & Scalp Treatments."
    },
    {
        keywords: ["location", "where", "address", "branch", "city", "chennai", "trichy"],
        response: "We have two convenient locations:\n\n📍 Chennai (Pallikaranai): 3, Selvam Nagar, Pallikaranai, Chennai 600100.\n\n📍 Trichy (Thillai Nagar): 37, 11th Cross E Rd, Srinivasapuram, West Thillai Nagar, Trichy 620018.\n\nBoth clinics are open daily from 11:00 AM to 5:00 PM."
    },
    {
        keywords: ["contact", "phone", "number", "call", "whatsapp", "reach"],
        response: "You can reach us directly at:\n\n📞 Phone: +91 73055 71103\n💬 WhatsApp: +91 63812 55757\n\nWe are available to answer your queries and schedule appointments."
    },
    {
        keywords: ["yes", "sure", "yeah", "yep", "ok", "okay"],
        response: "Great! Please click the Calendar icon below to choose a slot, or click the WhatsApp icon to chat with us directly."
    },
    {
        keywords: ["book", "appointment", "consultation", "schedule", "meet"],
        response: "Booking is easy! You can schedule a free consultation using our Google Calendar integration or contact us directly via WhatsApp.\n\nWould you like me to open the calendar for you?"
    },
    {
        keywords: ["result", "photo", "before", "after", "proof", "work"],
        response: "We have helped over 25,000 happy patients! Our results are natural-looking and permanent. You can view our 'Before & After' gallery on this website to see real transformations. We focus on high density and natural hairlines."
    },
    {
        keywords: ["safe", "pain", "side effect", "risk", "hurt"],
        response: "Safety is our top priority. We use US-FDA approved equipment and sterile techniques. Our procedures are minimally invasive (Micro-FUE), performed by experienced specialists. Most patients experience minimal discomfort and return to normal activities within 2-3 days."
    },
    {
        keywords: ["about", "clinic", "who", "history"],
        response: "Chennai Hair Studio Clinic is a trusted name in hair restoration with over a decade of experience. We are known for our ethical, transparent approach and affordable pricing. Our mission is to make advanced hair restoration accessible to everyone."
    }
];

const DEFAULT_RESPONSE = "I'm not sure I understood that completely. Could you please rephrase? You can ask about our prices, services, locations, or book a consultation.";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi there! 👋 I'm the Chennai Hair Studio assistant. Ask me anything about our treatments, pricing, or locations!",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        // Simulate bot thinking
        setTimeout(() => {
            const lowerInput = newUserMessage.text.toLowerCase();
            let botResponse = DEFAULT_RESPONSE;

            // Simple keyword matching
            for (const item of KNOWLEDGE_BASE) {
                if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
                    botResponse = item.response;
                    break;
                }
            }

            const newBotMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date()
            };

            setMessages(prev => [...prev, newBotMessage]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                    <MessageSquare className="w-7 h-7" />
                </button>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/917305571103?text=Hi!%20I'd%20like%20to%20book%20a%20consultation%20at%20Chennai%20Hair%20Studio%20Clinic."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border border-white/20"
                    title="Chat on WhatsApp"
                >
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </a>
            </div>

            {/* Chat Sidebar */}
            <div
                className={cn(
                    "fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out border-l border-border",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="h-16 bg-primary text-primary-foreground flex items-center justify-between px-4 shadow-md">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Clinic Assistant</h3>
                            <p className="text-xs text-primary-foreground/80">Online • Replies instantly</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Messages */}
                <ScrollArea className="h-[calc(100vh-8rem)] p-4 bg-muted/30">
                    <div className="flex flex-col gap-4 pb-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-3 max-w-[85%]",
                                    msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                    msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                                )}>
                                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-primary" />}
                                </div>
                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap",
                                        msg.sender === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-card text-card-foreground border border-border rounded-tl-none"
                                    )}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </ScrollArea>

                {/* Input */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your question..."
                            className="flex-1 bg-muted/50 border border-input rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <Button size="icon" onClick={handleSendMessage} className="rounded-full w-10 h-10 shrink-0">
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="mt-2 text-xs text-center text-muted-foreground">
                        Typically replies in seconds
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Chatbot;
