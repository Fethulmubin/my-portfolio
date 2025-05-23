import { useState, useRef } from "react";
import bulbOn from "/images/bulb-on.png";
import bulbOff from "/images/bulb-off.png";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Bulb() {
    const [isBulbOn, setIsBulbOn] = useState(false);
    const isMobile = useMediaQuery({ query: "(width >= 768px)" });
    const isTablet = useMediaQuery({ query: "(width >= 1024px)" });

    const bulbRef = useRef(null); // Ref to the image container

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: bulbRef.current,
            start: "top 10%",
            end: "top 40%",
            onEnter: () => setIsBulbOn(true),
            onLeaveBack: () => setIsBulbOn(false),
        });
    }, []);

    const handleToggle = () => {
        setIsBulbOn(!isBulbOn);
    };

    return (
        <div className="flex flex-col my-30 items-center justify-center h-screen bg-black">
            {/* Bulb Image */}
            <img
                ref={bulbRef}
                src={isBulbOn ? bulbOn : bulbOff}
                alt="Bulb"
                className={`rounded-full shadow-2xl transition-all duration-500 size-40 ${isBulbOn ? "bg-[#fceb55]  border-[10px] shadow-amber-600 shadow-2xl" : "bg-amber-50/45"} ${isMobile ? "md:w-64 md:h-64 w-48 h-48" : isTablet ? "md:w-80 md:h-80 w-60 h-60" : "w-40 h-40"}`}
            />

            {/* String (Wire) */}
            <div
                onClick={handleToggle}
                className={`relative md:mb-10 mb-60 w-1 h-52 bg-gray-400 cursor-pointer hover:bg-gray-200 mt-2`}
            >
                <div className={`absolute top-52 w-4 -right-[6px] bg-white-50 h-10 rounded-full`}></div>
            </div>

            {/* Instruction */}
            <p className="text-gray-500 mt-4 text-sm">Click the wire to turn the bulb on!</p>
        </div>
    );
}
