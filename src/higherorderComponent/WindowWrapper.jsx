import React, { useLayoutEffect, useRef } from "react";
import useWindowStore from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex, isMaximized } = windows[windowKey];
    const isPhotos = windowKey === "photos";
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (!isPhotos) {
        if (isMaximized) {
          // gsap.to(el, {
          //     width: "100vw",
          //     height: "100vh",
          //     top: "5vh",
          //     left: "2.5vw",
          //     duration: 0.4,
          //     ease: "back.out",
          // });
          gsap.to(el, {
            width: "90vw",
            height: "90vh",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          });
        } else {
          gsap.to(el, {
            width: "auto",
            height: "auto",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        if (isMaximized) {
          gsap.killTweensOf(el);
          gsap.set(el, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            x: 0,
            y: 0,
            margin: 0,
            transform: "none",
          });

          gsap.to(el, {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        } else {
          gsap.to(el, {
            width: "800px",
            height: "800px",
            top: "50",
            left: "50",
            x: "50%",
            y: "50%",
            duration: 0.2,
            ease: "power2.out",
          });
        }
      }
    }, [isMaximized]);

    // useGSAP(()=>{
    //     const el = ref.current;
    //     if(!el || !isOpen) return
    //     el.style.display="block";
    //     gsap.fromTo(el,{scale:0.8,opacity :0 , y:400,x:300} ,{scale:1,x:100,opacity:2,y:0,duration:1,ease:"Back.inOut"})
    // },[isOpen])

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      const isArchive = windowKey === "archive";

      gsap.fromTo(
        el,
        {
          scale: 0.8,
          opacity: 0,
          x: 300,
          y: 400,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "Back.inOut",

          ...(isArchive
            ? {
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
              }
            : {
                x: 100,
                y: 0,
              }),
        }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [a] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      return () => a.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || Component
  })`;

  return Wrapped;
  // return <div>WindowWrapper</div>
};
export default WindowWrapper;
