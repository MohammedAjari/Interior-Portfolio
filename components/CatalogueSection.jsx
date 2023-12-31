"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "Cossy Bedroom Setup",
            image: "/image2/1.jpg",
            description: "Comfortable and Cozy Bedroom Design for Relaxation.",
        },
        {
            id: "02",
            catagory: "KITCHING SETUP",
            title: "Neat & Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "Comfortable and Clean Kitchen Setup for Your Family.",
        },
        {
            id: "03",
            catagory: "DRAWING SETUP",
            title: "Family Drawing Room",
            image: "/image2/9.jpg",
            description: "family drawing room with a clean and comfortable design for your family.",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Clean Family Room",
            image: "/image2/7.jpg",
            description: "A inviting living space for your family.",
        },
    ]

    return (
        <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm" style={{fontFamily:'Open Sans' , fontSize: 'large'}}>{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}} href="">{item.title}</a>
                        <p className="py-4 text-gray-500">{item.description}</p>
                        {/* <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a> */}
                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 " style={{fontFamily:'Open Sans' , fontSize: 'large'}}>{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    )
}