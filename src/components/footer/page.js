import Image from "next/image";
import Link from "next/link";
import { Logo, instagram, facebook, twitter, discord } from "@/images/page";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-hrefp pt-5 aos mb-5">
                <div className='container-lg'>
                    <div className="row d-flex align-items-start">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <div className="footer-logo mb-2 d-flex">
                                    <Link href='/'> <Image src={Logo} alt="Logo"/> </Link>
                                </div>
                                <div className="footer-content">
                                    <p>Join us on a journey towards a healthier, balanced life - where each inhale and exhale contributes to your overall sense of wellness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pt-3">
                            <div className="footer-widget footer-menu ms-md-5 text-center">
                                <h2 className="footer-title">Contact</h2>
                                <ul>
                                    <li>Phone</li>
                                    <li>Email</li>
                                    <li>Location</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 pt-3">
                            <div className="footer-widget footer-menu logo-menu ms-md-5 text-end">
                                <h2 className="footer-title">Stay on touch</h2>
                                <ul className="social-logo">
                                    <li><Image src={instagram} alt="instagram"/></li>
                                    <li><Image src={facebook} alt="facebook"/></li>
                                    <li><Image src={twitter} alt="twitter"/></li>
                                    <li><Image src={discord} alt="discord"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 text-center footer-bottom">
                            <p>@2024 BreatheMatters all rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;