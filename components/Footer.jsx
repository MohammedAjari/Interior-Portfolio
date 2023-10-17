import Link from "next/link";

import logo from "../public/logo2.png";
import Image from "next/image";


export default function Footer() {

    return (
        <div className="bg-zinc-100">
            <div className="container lg:grid  py-14">
                <div className="grid gap-4 pb-4 text-center lg:pb-0 lg:grid-cols-3">
                    <div>
                        <h2 className="pb-4 text-xl font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>COMPANY</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/about">About Us</Link>
                            <Link className="py-1 hover:underline" href="/projects">Our Projects</Link>
                            <Link className="py-1 hover:underline" href="/gallery">Gallery</Link>
                            <Link className="py-1 hover:underline" href="/contact">Contact</Link>
                        </div>
                    </div>
                    {/* <div>
                        <h2 className="pb-4 text-xl font-semibold">DEVELOPMENT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="/about">Documentation</Link>
                            <Link className="py-1 hover:underline" href="/press">API Reference</Link>
                            <Link className="py-1 hover:underline" href="/careers">Changelog</Link>
                            <Link className="py-1 hover:underline" href="/contact">Status</Link>
                        </div>
                    </div> */}
                    <div>
                        <h2 className="pb-4 text-xl font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>CONNECT</h2>
                        <div className="flex flex-col ">
                            <Link className="py-1 hover:underline" href="https://www.facebook.com/ShaardaInteriors01/">Facebook</Link>
                            <Link className="py-1 hover:underline" href="https://www.youtube.com/@shaardaInterior">Youtube</Link>
                            <Link className="py-1 hover:underline" href="https://www.linkedin.com/in/shaardainterior/">Linkedin</Link>
                            <Link className="py-1 hover:underline" href="https://twitter.com/sutharnaresh3">Twitter</Link>
                            <Link className="py-1 hover:underline" href="https://www.instagram.com/shaarda_interiors/">Instagram</Link>

                            {/* https://www.youtube.com/@shaardaInterior */}
                        </div>
                    </div>

                    <div>
                    <Image src={logo} alt="LOGO" width={520} height={200} className="w-full" />
                    </div>
                </div>
                {/* <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20 ">
                    <p className="pb-4 text-xl font-semibold">STAY UPDATED</p>
                    <div className="relative lg:max-w-sm">
                        <input className="w-full px-4 pr-20 border-2 border-gray-300 rounded-full h-14" type="text" placeholder="Email Address" />
                        <button className="absolute h-10 px-3 text-sm text-white bg-black rounded-full top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black">Subscribe</button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </div> */}
            </div>

            {/* Copy Right */}
            <div className="py-10 bg-zinc-200">
                <div className="container text-center text-gray-500 lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p style={{fontFamily:'Open Sans' , fontSize: 'large'}}>&copy;2023 SHAARDA INTERIORS.All rights reserved </p>
                    </div>
                    {/* <div className="">
                        <Link className="p-4 hover:underline" href="/privacy">Privacy</Link>
                        <Link className="p-4 hover:underline" href="/terms">Terms</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
