import { Gym, Breathe2 } from "@/images/page";
import Image from "next/image";

const WhatDiff = () => {
    return (
        <section className="main-margintop ">
            <div className="container howitwork mb-5">
                <div className="row">
                    <div className="col-lg-4 col-md-8 order2">
                        <Image className="w-100" src={Gym} alt="Gym" />
                    </div>
                    <div className="col-lg-8 position-relative main-diff">
                        <h3>What Makes the CapnoTrainer® go Different?</h3>
                        <p className="mt-3">Unlike traditional breathing tools that focus on shallow techniques, the CapnoTrainer® GO goes deeper. It integrates <span className="highlight-text">psychophysiology, behavioral analysis, and cutting-edge technology</span> to provide a complete understanding of your breath’s role in health and performance.</p>
                        <Image className="diff-breathe" src={Breathe2} alt="Breathe2" />
                        <div className="diff-box mt-5">
                            <span className="highlight-text">“Breathing is behavior. And behavior can be changed. The CapnoTrainer® helps you edit, optimize, and own your breath for life.”</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatDiff;