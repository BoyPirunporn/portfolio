'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { links } from '@/lib/links';
import React from 'react';
import { EachElement } from '@/lib/utils';

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* LOGO */}
                <SheetTitle className='mt-32 mb-40 text-center text-2xl text-white'>
                    <Link href={"/"}>
                        <h1 className='text-4xl font-semibold'>Boy<span className='text-accent'>.</span></h1>
                    </Link>
                </SheetTitle>

                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8 '>
                    <EachElement
                        of={links}
                        render={(link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                onClick={() => setOpen(false)}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )}
                    />
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;