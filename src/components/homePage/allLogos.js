import Image from "next/image";
import { KNOSIS, DrCruz, Airway, Conspirelogo } from "@/images/page";

const logos = [
    { src: KNOSIS, alt: "KNOSIS Logo" },
    { src: DrCruz, alt: "DrCruz Logo" },
    { src: Airway, alt: "Airway Logo" },
    { src: Conspirelogo, alt: "Conspire Logo" }
];

const AllLogos = () => {
    return (
        <div className="container main-all-logos">
            <div className="row">
                {logos.map((logo, index) => (
                    <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center mb-3">
                        <Image src={logo.src} alt={logo.alt} width={150} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllLogos;