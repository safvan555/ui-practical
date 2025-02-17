import Image from "next/image";
import { Control } from "@/images/page";
const ControlPage = () => {
    return (
        <section className="container main-all-logos">
            <div className="row main-control">
                 <Image src={Control} alt="Control"/>
            </div>
        </section>
    );
};

export default ControlPage;