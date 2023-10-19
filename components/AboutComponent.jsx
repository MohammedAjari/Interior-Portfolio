import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { TbArrowUpRight } from "react-icons/tb";

export default function AboutComponent() {


    return (
        <div className="container py-14">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="" style={{ fontFamily: 'Montserrat, sans-serif' }}>An aesthetic room is <br />given harmony</a>
            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    {/* <YouTube videoId={videoId} opts={opts} /> */}
                    <Image src="/image2/46.jpg" width={900} height={500} alt="" className="" />
                </div>
                <div className="items-center">
                    <p className="lg:px-12 lg:pb-4 py-3 px-4" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                         Well-designed, beautiful spaces can have a calming effect and reduce stress levels, promoting a sense of tranquility and well-being.
                        <br/> <br/>
                         Aesthetic rooms are more inviting and can make guests feel welcome and comfortable in your home.
                        <br/><br/>
                         Classic and aesthetic designs tend to have a timeless quality, ensuring that your room's beauty remains relevant over the years.
                        <br/><br/>
                         A colorful and aesthetically pleasing room can stimulate creativity and imagination. It's an inspiring environment for artistic pursuits.
                        <br/>
                    </p>
                    <Link className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 lg:ml-10 hover:ring-gray-950 ring-offset-2 " href="/projects" style={{ fontFamily: 'Open Sans', fontSize: 'large' }} >Explore More <TbArrowUpRight className="w-5 h-5 ml-2" /></Link>
                </div>
            </div>
        </div>
    );
}
