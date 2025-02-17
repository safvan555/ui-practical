import Image from "next/image";
import { Wellness, Health, Athletes, Healthcare, Educators } from "@/images/page";

const whoCapData = [
    {
        img: Wellness,
        alt: "Wellness",
        title: "Wellness Enthusiasts",
        description: "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
        colClass: "col-lg-4 col-md-6"
    },
    {
        img: Health,
        alt: "Health",
        title: "Health Practitioners",
        description: "Provide clients with revolutionary breathing behavior analysis for lasting results.",
        colClass: "col-lg-4 col-md-6"
    },
    {
        img: Athletes,
        alt: "Athletes",
        title: "Athletes & Performers",
        description: "Boost endurance, focus, and physical resilience.",
        colClass: "col-lg-4 col-md-6"
    },
    {
        img: Healthcare,
        alt: "Healthcare",
        title: "Healthcare Professionals",
        description: "Enhance patient care with cutting-edge breathing assessment tools.",
        colClass: "col-lg-6 col-md-12"
    },
    {
        img: Educators,
        alt: "Educators",
        title: "Educators & Trainers",
        description: "Incorporate evidence-based breathing techniques into your teaching or coaching.",
        colClass: "col-lg-6 col-md-12"
    }
];

const WhoCap = () => {
    return (
        <section className="main-margintop">
            <div className="container experience-content">
                <div className="experience-text text-center col-md-12">
                    <h3>Who Is the CapnoTrainer® GO For?</h3>
                </div>
                <div className="row who-capno">
                    {whoCapData.map((item, index) => (
                        <div className={`${item.colClass} position-relative mb-4 d-flex justify-content-center`} key={index}>
                            <Image src={item.img} alt={item.alt} />
                            <div className="who-capno-content col-md-10 col-sm-10">
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

export default WhoCap;