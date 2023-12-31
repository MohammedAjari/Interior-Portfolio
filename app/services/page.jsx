import Image from "next/image";
import "../fonts.css";


export const metadata = {
    title: {
        default:
            "Services - Recent Interior Design Work | Shaarda Interiors Baroda",
        template: "Services | Shaarda Interiors  ",
    },
    description:
        "Explore our recent interior design projects in Baroda. See our portfolio of residential and commercial makeovers, and get inspired for your own design journey.",
    keywords: [
        "Interior Design Projects",
        "Baroda Portfolio",
        "Residential Transformations",
        "Commercial Makeovers",
        "Design Inspiration",
    ],
};

const ServicePackage = ({ title, description, price2BHK, price3BHK, price4BHK, imageSrc, packageId }) => (
    <div className=" p-2 ">
        <h2 className="text-4xl font-semibold mb-5" style={{ fontFamily: "Montserrat, sans-serif" }}>{title}</h2>

        {/* <p className="mb-4">{description}</p> */}
        <hr className="border-t-2 border-orange-400 lg:w-3/5 mb-5" />
        <div className="flex flex-col lg:flex-row justify-between items-center  ">

            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <span className="text-xl  " style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "Bold", fontStyle: "Italic" }}>
                    {packageId === 2 ? "2 BHK Premium Package" : packageId === 3 ? "2 BHK Platinum Package" : "2 BHK Basic Package"}
                    <p className="rounded border text-xl bg-orange-400 lg:mt-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: '900', textTransform: 'Uppercase', borderRadius: '10px', padding: '10px 40px' }}>{price2BHK}</p>
                </span>
                <span className="text-xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "Bold", fontStyle: "Italic" }}>
                    {packageId === 2 ? "3 BHK Premium Package" : packageId === 3 ? "3 BHK Platinum Package" : "3 BHK Basic Package"}
                    <p className="rounded border text-xl bg-orange-400 lg:mt-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: '900', textTransform: 'Uppercase', borderRadius: '10px', padding: '10px 40px' }}>{price3BHK}</p>
                </span>
                <span className="text-xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "Bold", fontStyle: "Italic" }}>
                    {packageId === 2 ? "4 BHK Premium Package" : packageId === 3 ? "4 BHK Platinum Package" : "4 BHK Basic Package"}
                    <p className="rounded border text-xl bg-orange-400 lg:mt-2" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: '900', textTransform: 'Uppercase', borderRadius: '10px', padding: '10px 40px' }}>{price4BHK}</p>
                </span>
            </div>
            <div className="w-full h-60 mt-4 md:ml-3 lg:w-4/12 lg:h-60 relative">
                <Image src={imageSrc} layout="fill" objectFit="cover" style={{ borderRadius: '10px' }} alt="" />
            </div>
        </div>

    </div>
);

export default function Services() {

    const servicePackages = [
        {
            id: 1,
            title: "Basic Package",
            description: "Basic interior design package",
            price2BHK: "7.50 Lacs only",
            price3BHK: "9.50 Lacs only",
            price4BHK: "11.50 Lacs only",
            imageSrc: "/image2/28.jpg",
        },
        {
            id: 2,
            title: "Premium Package",
            description: "Premium interior design package",
            price2BHK: "9.50 Lacs only",
            price3BHK: "11.50 Lacs only",
            price4BHK: "13.50 Lacs only",
            imageSrc: "/image2/35.jpg",
        },
        {
            id: 3,
            title: "Platinum Package",
            description: "Premium interior design package",
            price2BHK: "11.50 Lacs only",
            price3BHK: "13.50 Lacs only",
            price4BHK: "15.50 Lacs only",
            imageSrc: "/image2/49.jpg",
        },
        // Add more packages as needed...
    ];

    // const projects = [
    //     {
    //         id: 1,
    //         name: "Perfect living room for family time",
    //         description:
    //             "Living room with a clean and comfortable design for your family, charming with a modern design. ",
    //         image: "/image2/28.jpg",
    //     },
    //     {
    //         id: 2,
    //         name: "The Ideal Dining Space for Quality Family Time",
    //         description:
    //             "Discover a Dining Room that Blends Clean Comfort with Modern Charm for Your Family's Enjoyment. ",
    //         image: "/image2/35.jpg",
    //     },


    //     {
    //         id: 3,
    //         name: "Kitchen look modern and clean",
    //         description:
    //             "kitchen look modern and clean. charming with a modern design. ",
    //         image: "/image2/50.jpg",
    //         link: "",
    //     },

    //     {
    //         id: 4,
    //         name: "Drawing room for family time ",
    //         description:
    //             "Bedroom with a clean and comfortable design for your family, charming with a modern design. ",
    //         image: "/image2/49.jpg",
    //         link: "",
    //     },


    //     {
    //         id: 5,
    //         name: "The Perfect Sacred Space for Spiritual Moments",
    //         description:
    //             "Explore a Sacred Space That Harmonizes Serenity with Timeless Grace for Spiritual Bliss.",
    //         image: "/image2/38.jpg",
    //     },
    // ];

    return (
        <div className="overflow-hidden">
            <div className="bg-[url('/image2/54.jpg')] bg-center bg-cover bg-no-repeat">
                <h1
                    className="container py-64 text-5xl lg:text-6xl font-semibold tracking-widest text-white "
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    OUR SERVICES
                </h1>
            </div>
            <div className="container grid grid-cols-1 gap-8 py-8 lg:px-35">
                {servicePackages.map((pkg) => (
                    <div key={pkg.id} className="relative overflow-hidden  ">
                        <ServicePackage
                            title={pkg.title}
                            description={pkg.description}
                            price2BHK={pkg.price2BHK}
                            price3BHK={pkg.price3BHK}
                            price4BHK={pkg.price4BHK}
                            imageSrc={pkg.imageSrc}
                            packageId={pkg.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
