import { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordion = () => {
    const items = [
        { title: "✅ 100% Live Trainings", content: "Learn through interactive, real-time sessions designed for hands-on experience." },
        { title: "✅ 100% Job Guaranteed in Digital Marketing", content: "We ensure a guaranteed job in SEO and Digital Marketing upon successful completion." },
        { title: "✅ Learn from Professionals", content: "Gain insights from industry experts with years of global experience." },
        { title: "✅ Work on International Projects", content: "Get hands-on experience with projects from the US, UK, AUS, CAN, and IND." },
        { title: "✅ Flexible Timings", content: "Schedule your learning around your convenience with our flexible timings." },
        { title: "✅ Weekend Batches", content: "Special weekend batches designed for working professionals." }
    ];

    return (
        <div className="accordion-container">
            <h2 className="accordion-title">Why <span class="adc">Choose Us?</span></h2>
            <div className="accordion">
                {items.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
