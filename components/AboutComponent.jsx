import Image from "next/image";
import React from 'react';

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
                    <p className="px-12 pb-4 " style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                        Shaarda Classica is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.
                    </p>
                </div>
            </div>
        </div>
    );
}
