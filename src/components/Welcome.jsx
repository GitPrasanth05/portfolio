// import React, { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
//
// const renderText = (text, className, baseWeight = 400) => {
//     return [...text].map((char, i) => (
//         <span
//             key={i}
//             className={className}
//             style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
//         >
//       {char === " " ? "\u00A0" : char}
//     </span>
//     ));
// };
//
// const FONT_WEIGHTS = {
//     title: { min: 300, max: 900, default: 300 },
//     subtitle: { min: 100, max: 400, default: 100 }
// };
//
// const setup = (container, type) => {
//     if (!container) return;
//
//     const letters = container.querySelectorAll("span");
//     const { min, max,default:base } = FONT_WEIGHTS[type];
//
//     const animateLetter = (letter, weight, duration = 0.25) => {
//         return gsap.to(letter, {
//             duration,
//             ease: "expo.out",
//             fontVariationSettings: `'wght' ${weight}`
//         });
//     };
//
//     const handleMouseMove = (event) => {
//         const { left } = container.getBoundingClientRect();
//         const mouseX = event.clientX - left;
//
//         letters.forEach((letter) => {
//             const { left: l, width: w } = letter.getBoundingClientRect();
//             const distance = Math.abs(mouseX - (l - left + w / 2));
//             const intensity = Math.exp(-(distance ** 2) / 2000);
//
//             animateLetter(letter, min + (max - min) * intensity);
//         });
//     };
//     const handleMouseDown = () => {
//         letters.forEach((letter) => animateLetter(letter,base,0.3))
//     }
//     container.addEventListener("mousemove", handleMouseMove);
//     container.addEventListener("mouseleave", handleMouseDown);
// };
//
// const Welcome = () => {
//     const titleRef = useRef(null);
//     const subtitleRef = useRef(null);
//
//     useGSAP(() => {
//         setup(titleRef.current, "title");
//         setup(subtitleRef.current, "subtitle");
//     }, []);
//
//     return (
//         <section id="welcome">
//             <h1 ref={subtitleRef}>
//                 {renderText(
//                     "Hey, I'm Prasanth! Welcome to my portfolio",
//                     "text-3xl font-georama",
//                     300
//                 )}
//             </h1>
//
//             <h2 ref={titleRef} className="mt-7">
//                 {renderText("PORTFOLIO", "text-9xl italic font-georama")}
//             </h2>
//
//             <div className="small-screen">
//                 <p>This portfolio is designed only for desktop/tablet screens.</p>
//             </div>
//         </section>
//     );
// };
//
// export default Welcome;
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={`lett ${className}`}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
      {char === " " ? "\u00A0" : char}
    </span>
    ));
};

const renderWords = (text, className) => {
    return text.split(" ").map((word, i) => (
        <span key={i} className={`word ${className}`}>
            {word}&nbsp;
        </span>
    ));
};

const FONT_WEIGHTS = {
    title: { min: 300, max: 900, default: 300 },
    subtitle: { min: 400, max: 900, default: 500 }
};

const setup = (container, type) => {
    if (!container) return;

    // const letters = container.querySelectorAll("span");
    const letters = container.querySelectorAll("span.lett");

    const { min, max, default: base } = FONT_WEIGHTS[type];


    // const animateLetter = (letter, weight, duration = 0.25) => {
    //     return gsap.to(letter, {
    //         duration,
    //         ease: "expo.out",
    //         fontVariationSettings: `'wght' ${weight}`,
    //         color: "#05997eff",
    //         WebkitTextStroke: "1px black",
    //         textShadow: `
    //     0 0 6px rgba(255, 215, 0, 0.9),
    //     0 0 12px rgba(255, 215, 0, 0.7),
    //     0 0 20px rgba(255, 215, 0, 1)
    //   `,
    //     });
    // };
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "expo.out",
            fontVariationSettings: `'wght' ${weight}`,
            color: "transparent",              // VERY IMPORTANT
            WebkitTextStroke: "0px",           // optional
    //         textShadow: `
    //   0 0 6px rgba(255, 215, 0, 0.9),
    //   0 0 12px rgba(255, 215, 0, 0.7),
    //   0 0 20px rgba(255, 215, 0, 1)
    // `,
        });
    };
    const handleMouseMove = (event) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = event.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseDown = () => {
        letters.forEach((letter) =>
            gsap.to(letter, {
                duration: 0.3,
                fontVariationSettings: `'wght' ${base}`,
                color: "transparent",
                WebkitTextStroke: "0px",
                textShadow: "none",
            })
        );
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseDown);

    return ()=>{
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
    }
};
// const setupSubtitleHover = (container) => {
//     const letters = container.querySelectorAll("span");
//
//     letters.forEach((letter, index) => {
//         letter.addEventListener("mouseenter", () => {
//             gsap.to(letter, {
//                 y: -10,
//                 rotation: gsap.utils.random(-10, 10),
//                 scale: 1.2,
//                 color: "#ffd700",
//                 textShadow: "0 0 12px #ff8800, 0 0 20px #ff5500",
//                 duration: 0.3,
//                 ease: "power2.out",
//             });
//         });
//
//         letter.addEventListener("mouseleave", () => {
//             gsap.to(letter, {
//                 y: 0,
//                 rotation: 0,
//                 scale: 1,
//                 color: "transparent",
//                 textShadow: "none",
//                 duration: 0.3,
//                 ease: "power2.inOut",
//             });
//         });
//     });
// };
// const setupSubtitleHover = (container) => {
//     if (!container) return;
//
//     const letters = container.querySelectorAll("span");
//
//     letters.forEach((letter, index) => {
//         // Hover (mouseenter)
//         letter.addEventListener("mouseenter", () => {
//             gsap.fromTo(letter,
//                 {
//                     y: 20,
//                     scale: 0.7,
//                     rotation: gsap.utils.random(-20, 20),
//                     opacity: 0.6
//                 },
//                 {
//                     y: -25,
//                     scale: 1.45,
//                     rotation: 0,
//                     opacity: 1,
//                     color: "#ffd700",
//                     textShadow: "0 0 20px #ffae00, 0 0 35px #ff5500",
//                     duration: 0.35,
//                     ease: "power3.out"
//                 }
//             );
//         });
//
//         // Reset (mouseleave)
//         letter.addEventListener("mouseleave", () => {
//             gsap.to(letter, {
//                 y: 0,
//                 scale: 1,
//                 rotation: 0,
//                 opacity: 1,
//                 color: "black",
//                 boxSizing: "border-box",
//                 boxShadow:"10px 10px 10px 10px white",
//                 textShadow: "none",
//                 duration: 0.3,
//                 ease: "power2.inOut"
//             });
//         });
//     });
// };

const setupSubtitleHover = (container) => {
    if (!container) return;

    const letters = container.querySelectorAll("span.word");

    letters.forEach((letter) => {
        let hoverAnim = null;
        let leaveAnim = null;

        letter.addEventListener("mouseenter", () => {
            if (leaveAnim) leaveAnim.kill();
            if (hoverAnim) hoverAnim.kill();

            hoverAnim = gsap.fromTo(letter,
                {
                    y: 15,
                    scale: 0.8,
                    rotation: gsap.utils.random(-10, 10),
                    opacity: 0.7

                },
                {
                    y: -25,
                    scale: 1.45,
                    rotation: 0,
                    opacity: 1,
                    color: "black",
                    background:"linear-gradient(290deg, gold, silver,white,cyan)",
                    textShadow: "0 0 18px #ffae00, 0 0 30px #ff5500",
                    duration: 0.35,
                    boxSizing: "border-box",
                    padding:"10px",
                boxShadow:"0px 0px 10px 0px black ",
                    ease: "power3.out"
                }
            );
        });

        letter.addEventListener("mouseleave", () => {
            if (hoverAnim) hoverAnim.kill();
            if (leaveAnim) leaveAnim.kill();

            leaveAnim = gsap.to(letter, {
                y: 0,
                scale: 1,
                rotation: 0,
                opacity: 1,
                color: "black",
                textShadow: "none",
                duration: 0.28,
                ease: "power2.inOut"
            });
        });
    });
};




const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
       const titclean= setup(titleRef.current, "title");
        // const subclean=setup(subtitleRef.current, "subtitle");
        setupSubtitleHover(subtitleRef.current);

        return ()=>{
            titclean();
            // subclean();
        }
    }, []);

    return (
        <section id="welcome">
            <h1 ref={subtitleRef} className="subtitle text-5xl sm:text-6xl md:text-7xl font-bold">
                {renderWords("Hey, I'm Prasanth!", "")}
            </h1>
            <h1 className={`text-7xl mt-3  lett font-georama underline `}>This is my </h1>
            <h2 ref={titleRef} className="mt-7">
                {renderText("PORTFOLIO", "text-9xl italic font-georama")}
            </h2>
        </section>
    );
};

export default Welcome;
