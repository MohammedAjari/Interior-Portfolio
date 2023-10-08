'use client'

import { useEffect } from 'react'
import Image from "next/image";
import CountUp from 'react-countup';

export default function CompanySection() {
    useEffect(() => {
        console.log("in useEffect");
    })
    return (
        <div className="py-14  bg-zinc-100">
            {/* <p className="py-4 text-lg font-medium text-center opacity-40">Trusted by the world’s best companies</p> */}
            <div className="container flex flex-wrap items-center justify-between  ">
                {/* <Image src="/image/air-company-logo.png" width={128} height={128} alt="" className="opacity-40" /> */}
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif'}}  class="opacity-60 text-center">Projects</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500" }} start={0} end={99} width={128} height={128} className="opacity-40 text-center" duration={2.5} />
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif'}} class="opacity-60 text-center ">Customers</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500" }} start={0} end={50} width={128} height={128} className="opacity-40 text-center" duration={2.5} />
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif'}} class="opacity-60 text-center ">Awards</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500" }} start={0} end={35} width={128} height={128} className="opacity-40 text-center" duration={2.5} />
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif'}} class="opacity-60 text-center ">Partners</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500"  }} start={0} end={15} width={128} height={128} className="opacity-40 text-center" duration={2.5} />
                </div>
            </div>
        </div>
    );
}