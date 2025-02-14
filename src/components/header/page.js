"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/images/page";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav container">
                <div className='Nav-container w-100'>
                    <div className="navbar-header d-flex align-items-center justify-content-between">
                        <Link href="/">
                            <Image className='navlogo' src={Logo} alt="navlogo" />
                        </Link>
                        <button className="color-button lucida-text">
                            Book Now
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;