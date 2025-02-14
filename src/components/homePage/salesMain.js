"use client";
import { Breathe, Capnotrainer } from "@/images/page";
import Image from "next/image";
import Header from "../header/page";

const SalesMain = () => {
    return (
        <section className="main-sales">
            <Header />
            <div className="container main-content">
                <div className="sales-content">
                    <h1>Transform Your Life with the Revolutionary CapnoTrainer® GO <Image src={Breathe} alt='breathe' /></h1>
                    <div className="row breathe-content">
                        <div className="col-lg-7 col-md-12">
                            <h6>Breathe Smarter, Live Better</h6>
                            <p>Breathing is more than just an unconscious action—it’s a foundation of health, performance, and emotional well-being. But what if your breathing habits are silently holding you back? Enter the CapnoTrainer® GO, the groundbreaking tool that merges science, psychology, and technology to revolutionize your breathing habits and transform your life.</p>
                            <div className="bg-color-img"></div>
                        </div>
                        <div className="col-lg-5 col-md-12 capnotrainer-box">
                            <Image src={Capnotrainer} alt='Capnotrainer' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SalesMain;