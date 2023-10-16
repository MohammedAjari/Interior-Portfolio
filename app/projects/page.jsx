import Image from "next/image";
import "../fonts.css";


export const metadata = {
    title: {
        default:
            "Projects - Recent Interior Design Work | Shaarda Interiors Baroda",
        template: "Projects | Shaarda Interiors  ",
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

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "Perfect living room for family time",
            description:
                "Living room with a clean and comfortable design for your family, charming with a modern design. ",
            image: "/image2/28.jpg",
        },
        {
            id: 2,
            name: "Drawing room for family time ",
            description:
                "Bedroom with a clean and comfortable design for your family, charming with a modern design. ",
            image: "/image2/8.jpg",
            link: "",
        },

        {
            id: 3,
            name: "Kitchen look modern and clean",
            description:
                "kitchen look modern and clean. charming with a modern design. ",
            image: "/image2/12.jpg",
            link: "",
        },

        {
            id: 4,
            name: "The Ideal Dining Space for Quality Family Time",
            description:
                "Discover a Dining Room that Blends Clean Comfort with Modern Charm for Your Family's Enjoyment. ",
            image: "/image2/35.jpg",
        },
        {
            id: 5,
            name: "The Perfect Sacred Space for Spiritual Moments",
            description:
                "Explore a Sacred Space That Harmonizes Serenity with Timeless Grace for Spiritual Bliss.",
            image: "/image2/38.jpg",
        },
    ];

    return (
        <div className="overflow-hidden">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
                <h1
                    className="container py-64 text-5xl lg:text-6xl font-semibold tracking-widest text-white "
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                    OUR PROJECTS
                </h1>
            </div>
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image
                                src={project.image}
                                width={480}
                                height={380}
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 lg:p-12 
                        text-xl p-3 text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{project.name}</h1>
                            <p className=" lg:py-4  " style={{}}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
