"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
    return (
        <nav className={`flex justify-between py-4 px-6  border bottom-2`}>
            <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src="/mypic.jpg" />
                    <AvatarFallback>H</AvatarFallback>
                </Avatar>
                <h1 className={`font-serif font-extrabold text-xl `}>Blogs By Hammad</h1>
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

