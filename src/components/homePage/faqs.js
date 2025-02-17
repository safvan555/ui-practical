import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
    {
        question: "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
        answer: "BreatheMatters is a holistic wellness brand dedicated to improving respiratory health and overall well-being. We offer a curated selection of innovative products designed to enhance the quality of your breathing experience."
    },
    {
        question: "Is it safe to use for health conditions like asthma or anxiety?",
        answer: "Yes, it’s ideal for understanding and improving breathing habits that exacerbate these conditions. Consult your healthcare provider if you have specific concerns."
    },
    {
        question: "How do I get started?",
        answer: "Simply order your CapnoTrainer® GO, and follow the included guide to begin exploring your breath."
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="main-margintop">
            <div className="container experience-content">
                <div className="col-lg-12 text-center">
                    <h3>FAQs</h3>
                </div>
                <div className="faq-content col-md-10">
                    {faqsData.map((faq, index) => (
                        <div className="faq-box" key={index}>
                            <div className="faq-header" onClick={() => toggleFaq(index)}>
                                <h5>{faq.question}</h5>
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>

                            {/* Apply smooth height transition */}
                            <div className={`faq-description ${openIndex === index ? "open" : ""}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;