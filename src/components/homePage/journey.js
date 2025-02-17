import Image from "next/image";
import { Journey } from "@/images/page";

const JourneyPage = () => {
    return (
        <section className="container main-margintop">
            <div className="row main-journey">
                 <h4>Don’t Wait</h4>
                 <h3>Transform Your Breathing Today!</h3>
                 <p className="mt-3">Your breath is your power. Take control with the CapnoTrainer® GO, and experience life with greater clarity, confidence, and vitality.</p>
                 <div className="journey-btn">
                    <button>Order Now and Start Your Breathing Journey!</button>
                 </div>
            </div>
        </section>
    );
};

export default JourneyPage;