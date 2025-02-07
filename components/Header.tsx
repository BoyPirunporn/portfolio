import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container max-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold ">
                        {`<Boy/>`}<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                </div>

                {/* mobilenav */}

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;