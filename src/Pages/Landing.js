import React, { useRef } from "react";
import Menubar from "../Components/Menubar";
import Banner from "../Components/Banner";
import Patterns from "../Components/Patterns";
import Instruction from "../Components/Instruction";

function Landing() {
    // ใช้ useRef เพื่อสร้างการอ้างอิงถึงส่วนของ Patterns
    const patternsRef = useRef(null);

    const scrollToPatterns = () => {
        patternsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    

    return (
        <>
            <Menubar />

            <Banner scrollToPatterns={scrollToPatterns} />
            <Instruction />
            {/* ref of Patterns */}
            <div ref={patternsRef}>
                <Patterns />
            </div>
        </>
    );
}

export default Landing;
