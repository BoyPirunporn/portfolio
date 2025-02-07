'use client';

import { links } from "@/lib/links";
import { EachElement } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            <EachElement
                of={links}
                render={(link,index) => (<Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>)}
            />
        </nav>
    );
}

export default Navbar;