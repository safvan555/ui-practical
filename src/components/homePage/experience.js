import Image from "next/image";
import { Feedback, RealTime, Monitor,Breathe2 } from "@/images/page";

const experienceData = [
    {
        img: RealTime,
        alt: "RealTime",
        title: "See Your Breathing in Action",
        description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals."
    },
    {
        img: Monitor,
        alt: "Monitor",
        title: "See Your Breathing in Action",
        description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals."
    },
    {
        img: Feedback,
        alt: "Feedback",
        title: "See Your Breathing in Action",
        description: "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals."
    }
];

const Experience = () => {
    return (
        <section className="main-margintop main-expi">
            <div className="container experience-content">
                <div className="experience-text col-lg-6 col-md-12">
                    <h6>Experience the</h6>
                    <h3>Power of CapnoTrainer® GO</h3>
                </div>
                <div className="row">
                    {experienceData.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 position-relative imgofexpi" key={index}>
                            <Image src={item.img} alt={item.alt} />
                            <div className="exp-imgcontent">
                                <span className="highlight-text">{item.title}</span>
                                <p>{item.description}</p>
                            </div>                     
                        </div>                      
                    ))}
                </div>
                <Image className="exprin-lastimg" src={Breathe2} alt='Breathe2' /> 
            </div>
        </section>
    );
}

export default Experience;