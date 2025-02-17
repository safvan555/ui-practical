import Image from "next/image";
import { Pro1, Pro2 } from "@/images/page";

const reviews = [
    {
        img: Pro1,
        name: "Amanda K",
        role: "Entrepreneur",
        text: "I thought I knew how to breathe—until I used the CapnoTrainer® GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!"
    },
    {
        img: Pro2,
        name: "John D",
        role: "Athlete",
        text: "Breathing training with CapnoTrainer® GO has completely transformed my endurance. I can push myself further without feeling drained. Highly recommend it to all athletes!"
    }
];

const Review = () => {
    return (
        <section className="main-margintop main-expi">
            <div className="review-main">
                <div className="col-lg-12 col-md-12 text-center">
                    <h3>Real Success Stories</h3>
                </div>
                <div className="review-content position-relative pb-5">
                    <div className="bg-review"></div>
                    <div className="container">
                        <div className="row justify-content-between">
                            {reviews.map((review, index) => (
                                <div className="review-box col-md-5 p-0" key={index}>
                                    <div className="review-span">
                                        <span>{review.text}</span>
                                    </div>
                                    <div className="review-profile">
                                        <Image src={review.img} alt="profileImage" />
                                        <h6>{review.name} <span>{review.role}</span></h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Review;