const experienceData = [
    {
        title: "Measure What Matters",
        description: "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health."
    },
    {
        title: "Customized Interventions",
        description: "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones."
    },
    {
        title: "Visualize Your Breathing",
        description: "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths."
    },
    {
        title: "Engage in Practicums",
        description: "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training."
    }
];

const HowItWorks = () => {
    return (
        <section className="main-expi main-how">
            <div className="container howitwork mb-5">
                <div className="col-lg-12">
                    <h3>How the CapnoTrainer® GO Works</h3>
                </div>
                <div className="col-lg-8 mt-4 row howit-sec">
                    {experienceData.map((item, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="howitwork-content">
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

export default HowItWorks;