import React from 'react'
import WindowWrapper from "#higherorderComponent/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Download} from "lucide-react";
import {Document,Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();
const Resume = () => {
    return <>
        <div id="window-header">

        <WindowControls target="resume" />
            <h2 className="text-black m-2">Resume.pdf</h2>
            <a href= "files/resume.pdf" download className="cursor-pointer text-black stroke-black" title="Download resume" ><Download className="icon"/></a>
        </div>
        <Document file="files/resume.pdf" >
            <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
    </>
}
const resumeWindow =WindowWrapper(Resume,"resume");
export default resumeWindow
