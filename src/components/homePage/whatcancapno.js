import Image from "next/image";
import { EliminateStress ,EnhanceMental, AchievePeak, ImprovePhysical} from "@/images/page";

const experienceData = [
    {
        img: EliminateStress,
        alt: "EliminateStress",
        title: "Eliminate Stress and Anxiety",
        description: "Learn to control overbreathing, reduce hypocapnia, and maintain balance even in challenging situations."
    },
    {
        img: EnhanceMental,
        alt: "EnhanceMental",
        title: "Enhance Mental Clarity and Focus",
        description: "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics."
    },
    {
        img: AchievePeak,
        alt: "AchievePeak",
        title: "Achieve Peak Performance",
        description: "Whether you’re giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath."
    },
    {
        img: ImprovePhysical,
        alt: "ImprovePhysical",
        title: "Improve Physical Health",
        description: "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology."
    }
];

const WhatCanCapno = () => {
    return (
        <section className="main-margintop">
            <div className="container experience-content">
                <div className="experience-text col-lg-12 col-md-12 text-center">
                    <h3>What Can the CapnoTrainer®GO Do for You?</h3>
                </div>
                <div className="row main-whatcan">
                    {experienceData.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 position-relative" key={index}>
                            <Image src={item.img} alt={item.alt} />
                            <div className="whatcapno-content col-lg-12">
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </div>                     
                        </div>                      
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhatCanCapno;