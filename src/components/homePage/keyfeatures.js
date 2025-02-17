import Image from "next/image";
import { Monitoring, Breathwave, Breathstrategies, Portable } from "@/images/page";

const keyFeatures = [
    {
        img: Monitoring,
        title: "Real-Time Monitoring",
        description: "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm."
    },
    {
        img: Breathwave,
        title: "Capnogram Visualization",
        description: "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time."
    },
    {
        img: Breathstrategies,
        title: "Custom Learning Plans",
        description: "Tailored strategies to help you unlearn bad habits and master new ones."
    },
    {
        img: Portable,
        title: "Interactive Practicums",
        description: "Experiment with guided breathing challenges to align behavior with physiology."
    }
];

const KeyFeatures = () => {
    return (
        <section className="main-margintop">
            <div className="container experience-content">
                <div className="col-lg-12 text-center">
                    <h3>Key Features You’ll Love</h3>
                </div>
                <div className="row main-key">
                    {keyFeatures.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4 main-key-content" key={index}>
                            <Image src={feature.img} alt={feature.title} />
                            <span>{feature.title}</span>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyFeatures;