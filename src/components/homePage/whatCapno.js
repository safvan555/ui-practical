import { ColorBreathe, Capno, Tick, Breathe2 } from "@/images/page";
import Image from "next/image";

const WhatCapno = () => {
    return (
        <section className="container main-margintop">
            <div className="thatcapno-content row position-relative">
                <div className="col-md-12">
                    <h3 className="mb-0">What Is the <Image src={ColorBreathe} alt='breathe' /> </h3>
                    <h2>CapnoTrainer® GO?</h2>
                    <p>The CapnoTrainer® GO isn’t just a tool—it’s your personal gateway to a healthier, more aligned you. Using advanced <span className="highlight-text">capnography technology</span>, it provides real-time insights into your breathing behavior by measuring CO2 levels and visualizing your breathing patterns. Paired with a guided learning framework, it empowers you to:</p>         
                </div>
                <div className="col-md-12 main-capno-img">
                <div className="capno-img">
                        <Image src={Capno} alt='Capno' />
                    </div>
                    <div className="capno-list">
                    <ul>
                        <li>
                            <Image src={Tick} alt="Tick" /> Identify and correct dysfunctional breathing habits.
                        </li>
                        <li>
                            <Image src={Tick} alt="Tick" /> Understand the triggers and motivations behind your habits.
                        </li>
                        <li>
                            <Image src={Tick} alt="Tick" /> Optimize your respiration for health, focus, and performance.
                        </li>
                    </ul>
                    <Image className="breathe2" src={Breathe2} alt="Breathe2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatCapno;