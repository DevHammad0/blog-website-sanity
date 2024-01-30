"use client";

import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
    return (
        <nav className={`flex justify-between py-4 px-6  border-b-2`}>
            <div className="flex items-center gap-2">
                <Link href="/"><Image src="/logo.png" alt="mypic-logo" className="h-10 w-10 shrink-0 rounded-full overflow-hidden" priority width={40} height={40} /></Link>
                <Link href="/"><h1 className={`font-extrabold text-2xl tracking-tight`}>Blogs<span className="mycolor">ByHammad</span></h1>
            </Link>
            </div>
            <div className="flex gap-2">
                {/* <Link href="https://www.linkedin.com/in/-hammad/" className={`${buttonVariants({ variant: "secondary", size: "icon" })} transition duration-500 ease-in-out hover:border-b hover:border-slate-800`}>
                    {theme === 'light' ?
                        <Image src="/linkedin-light.png" width={25} height={25} alt="linkedin" /> :
                        <Image src="/linkedin-dark.png" width={25} height={25} alt="linkedin" />
                    }

                </Link> */}
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar

