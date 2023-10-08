
// import { jsxs, useEffect } from 'react/jsx-runtime';
import Image from "next/image";
import 'font-awesome/css/font-awesome.min.css';
import '../fonts.css';
// import {GoogleMap,useLoadScript , Marker} from "@react-google-maps/api";
import { TbArrowUpRight } from "react-icons/tb";

export default function Contact() {
    function Submit() {
        //event.preventDefault();
        const formEle = document.getElementsByClassName("formE");
        const formDatab = new FormData(formEle);
        console.log("before fetch");
        fetch("https://script.google.com/macros/s/AKfycbzDGHu3vJHqkgiLmqKe8vG5cmpQAGe6V9RImY2U3wGv2aka1xXILXjOXWmHZeU4OeLt/exec", {
            method: "POST",
            body: formDatab,

        })
            .then((res) => res.json())
            .then((data) => {
                console.log("in data");
                //console.log(data);
            })
            .catch((error) => {
                console.log("in error");
                //console.log(error);
            });
    }


    return (
        <div className="bg-white min-h-screen">
            <div className="bg-[url('/image2/22.jpg')] bg-center bg-cover h-[400px] lg:h-[600px] relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-semibold text-center text-white lg:text-left py-10 lg:py-0 lg:text-7xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    Contact Us
                </h1>
            </div>

            <div className="container mx-auto py-10 lg:py-20">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="py-4 px-4">
                        <p className="text-xl font-semibold text-center text-gray-800 lg:text-2xl" style={{fontFamily: 'Montserrat, sans-serif'}}>
                            EMAIL US WITH EASE
                        </p>
                        <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" style={{fontFamily:'Open Sans' }}>
                            Submit Form
                        </h1>
                        <form  className="formE">
                            <input
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-orange-400"
                                type="text"
                                placeholder="Your Name"
                                required
                            />
                            <input
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-orange-400"
                                type="email"
                                placeholder="Your Email"
                                required
                            />
                            <input
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-orange-400"
                                type="text"
                                placeholder="Subject"
                                required
                            />
                            <textarea
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring focus:ring-orange-400"
                                rows={6}
                                placeholder="Your Message"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-4 py-4 bg-orange-400 text-white rounded-full shadow-lg hover:opacity-95 focus:outline-none focus:ring focus:ring-orange-400"
                                style={{fontFamily:'Open Sans' , fontSize: 'large'}}
                            >
                                Send 
                                {/* <TbArrowUpRight className="w-5 h-5 ml-2" /> */}
                            </button>
                        </form>
                    </div>
                    <div className="lg:ml-4">
                        <div className="relative h-[300px] lg:h-[450px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.0893659478047!2d73.1953682123045!3d22.356428199657113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcedb10aa5b4b%3A0xede02139206e643!2sSankalp%20Restaurant!5e0!3m2!1sen!2sin!4v1696260628873!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="bg-orange-400 p-5 rounded-full mr-4">
                                <i className="fa fa-phone text-white text-4xl"></i>
                            </div>
                            <div className="contactNumbers">
                                <ul className="text-lg font-cursive text-orange-300">
                                    <li>70437 31656</li>
                                    <li>70692 07477</li>
                                    <li>70692 77477</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// https://script.google.com/macros/s/AKfycbxld0TJiHtoT0nfKNVtIDeT5E5enbsXQbwrtSOGpcpaYvJbL25QhN_1KcXhflmnIhoK/exec
// function Submit(event) {
//     event.preventDefault();
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//         "https://script.google.com/macros/s/AKfycbxld0TJiHtoT0nfKNVtIDeT5E5enbsXQbwrtSOGpcpaYvJbL25QhN_1KcXhflmnIhoK/exec",
//         {
//             method: "POST",
//             body: formDatab
//         }
//     )
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }
// const ContactFormClient = useClient(ContactForm);