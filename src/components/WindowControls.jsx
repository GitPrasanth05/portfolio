// import React, {useContext} from 'react'
import useWindowStore from "#store/window.js";

const WindowControls = ({target}) => {
    const {closeWindow , maximizeWindow} = useWindowStore()
    return (
        <div id="window-controls">
            <div className="close" title="close" onClick={()=>closeWindow(target)}/>
            <div className="minimize" title="minimize" onClick={()=>closeWindow(target)}/>
            <div className="maximize" title="maximize" onClick={() => {if(target != "resume")maximizeWindow(target)}}/>

        </div>
    )
}
export default WindowControls
