import Image from "next/image";
import { Headache, LowBattery, MusclePain, WomanYoga } from "@/images/page";

const benefits = [
    { icon: Headache, title: "Compromise your health:", description: "Triggering anxiety, fatigue, and physical discomfort." },
    { icon: LowBattery, title: "Disrupt your performance:", description: "Causing focus deficits, memory issues, and suboptimal endurance." },
    { icon: MusclePain, title: "Exacerbate existing conditions:", description: "Like asthma, chronic pain, and even stress-related disorders." }
];

const PowerBreathe = () => {
    return (
        <section className="container powerbreathe">
            <div className="powerbreathe-content">
                <h3>Discover the Hidden Power of Your Breath</h3>
                <div className="">
                    <div className="col-md-12 powerbreathe-bg row">
                        <div className="col-lg-4 col-md-5 p-0">
                            <Image src={WomanYoga} alt="WomanYoga" />
                        </div>
                        <div className="col-lg-8 col-md-7 powerbreathe-box p-0">
                            <div className="powerbreathe-box-content">
                                <p className="cu-p">Your breathing isn’t just about oxygen in and carbon dioxide out—it’s a complex behavior shaped by triggers, habits, and physiology. When misaligned, these habits can:</p>
                                {benefits.map((item, index) => (
                                    <div key={index} className="d-flex align-items-start mb-4">
                                        <div className="me-3">
                                            <Image src={item.icon} alt={item.title} width={40} height={40} />
                                        </div>
                                        <div>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <p className="mb-0">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="last-content">
                                <p>Millions of people suffer the consequences of poor breathing habits. But you don’t have to be one of them. With the CapnoTrainer® GO, you’ll unlock a scientifically-backed pathway to breathing mastery.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PowerBreathe;