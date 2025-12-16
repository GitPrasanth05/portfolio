import React from 'react'
import WindowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import {WindowControls} from "#components";
import {socials} from "#constants";
import {Copy} from "lucide-react";


const Contact = () => {

    return(
    <>
        <div className="window-header p-5">
            <WindowControls target="contact"/>
            <h2>CONTACT ME</h2>
        </div>
        <div className="p-5 space-y-5">
            <img src={"/images/prasanth.jpg"} alt={"prasanth"} className={"w-20 rounded-full"}/>
            <h3>Let's Connect</h3>
            <div className="text-left space-y-2">


                <div className="flex items-center gap-2">
                    <span className="font-semibold">Phone:</span>
                    <span>9894510975</span>
                    <Copy
                        size={16}
                        className="cursor-pointer text-gray-600 hover:text-black"
                        title="Copy phone number"
                        onClick={() => navigator.clipboard.writeText("9894510975")}
                    />
                </div>


                <div className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <a
                        href="mailto:prasanth09102005@gmail.com"
                        className="mail"
                    >
                        prasanth09102005@gmail.com
                    </a>
                    <Copy
                        size={16}
                        className="cursor-pointer text-gray-600 hover:text-black"
                        title="Copy email"
                        onClick={() =>
                            navigator.clipboard.writeText("prasanth09102005@gmail.com")
                        }
                    />
                </div>


                <div className="flex items-center gap-2">
                    <span className="font-semibold">Clg-Email:</span>
                    <a
                        href="mailto:prasanth.m2023cce@sece.ac.in"
                        className="mail"
                    >
                        prasanth.m2023cce@sece.ac.in
                    </a>
                    <Copy
                        size={16}
                        className="cursor-pointer text-gray-600 hover:text-black"
                        title="Copy college email"
                        onClick={() =>
                            navigator.clipboard.writeText("prasanth.m2023cce@sece.ac.in")

                        }
                    />
                </div>

            </div>



            <p></p>
            <ul>
                {socials.map(({id,bg,link,icon,text})=>(
                    <li key={id} style={{backgroundColor:bg}}><a href={link} target={"_blank"} rel={"noopener noreferrer"} title={{text}}>
                        <img src={icon} alt={text} className={"size-5"}/>
                        <p>{text}</p>
                    </a></li>
                ) )}
            </ul>
        </div>
    </>
    )
}
// <div className="text-left space-y-2">
//                 <p style={{display:"flex", justifyContent:"left"}}>
//                     <span className="font-semibold" >Phone:</span> 9894510975
//                     <Copy/>
//                 </p>
//
//                 <p>
//                     <span className="font-semibold">Email:</span>
//                     <a
//                         href="mailto:prasanth09102005@gmail.com"
//                         className="mail"
//                     >
//                         prasanth09102005@gmail.com
//                     </a>
//                 </p>
//
//                 <p>
//                     <span className="font-semibold">Clg-Email:</span>
//                     <a   href="mailto:prasanth.m2023cce@sece.ac.in"
//                                                 className="mail">
//
//                         prasanth.m2023cce@sece.ac.in
//                     </a>
//
//                 </p>
//             </div>
const ContactWindow = WindowWrapper(Contact,"contact")
export default ContactWindow
