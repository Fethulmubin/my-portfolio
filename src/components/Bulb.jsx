import { useState } from "react";
import bulbOn from "/images/bulb-on.png";
import bulbOff from "/images/bulb-off.png";
import { useMediaQuery } from "react-responsive";


export default function Bulb() {
    const [isBulbOn, setIsBulbOn] = useState(false);
    const isMobile = useMediaQuery({ query: "(width >= 768px)" });
    const isTablet = useMediaQuery({ query: "(width >= 1024px)" });


    const handleToggle = () => {
        setIsBulbOn(!isBulbOn);
    };

    return (
        <div className="flex flex-col my-25 items-center justify-center h-screen bg-black">
            {/* Bulb Image */}
            <img
                src={isBulbOn ? bulbOn : bulbOff}
                alt="Bulb"
                className={` rounded-full shadow-2xl transition-all duration-500 size-50 ${isBulbOn ? "bg-[#fceb55]  border-[10px] shadow-amber-600 shadow-2xl" : "bg-amber-50/45"} ${isMobile ? "md:w-80 md:h-80 w-60 h-60" : isTablet ? "md:w-80 md:h-80 w-60 h-60" : "w-40 h-40"} `}
            />

            {/* String (Wire) */}
            <div
                onClick={handleToggle}
                className={`relative md:mb-10 mb-80 w-1 h-52 bg-gray-400 cursor-pointer hover:bg-gray-200 mt-2`}
            >
                <div className={`absolute top-52 w-4 -right-[6px] bg-white-50 h-10 rounded-full`}>
                </div>

            </div>

            {/* Instruction */}
            <p className="text-gray-500 mt-4 text-sm">Click the wire to turn the bulb on!</p>
        </div>
    );
}
