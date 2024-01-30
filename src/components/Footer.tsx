import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center p-5 m-4">
            <p className="text-sm">© {year} BlogsByHammad. All rights reserved.</p>
            <div className="m-3">
                <Link href="https://www.linkedin.com/in/-hammad/" className="icon inline-flex flex-shrink-0 justify-center items-center">
                    <Image src="/linkedin.png" alt="linkedIn" width={25} height={25} />
                </Link>
                <Link href="https://github.com/DevHammad0" className="icon inline-flex flex-shrink-0 justify-center items-center">
                    <Image src="/github.png" alt="linkedIn" width={25} height={25} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer