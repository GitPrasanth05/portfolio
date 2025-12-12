// import React, {useContext} from 'react'
import useWindowStore from "#store/window.js";

const WindowControls = ({target}) => {
    const {closeWindow , maximizeWindow} = useWindowStore()
    return (
        <div id="window-controls">
            <div className="close" onClick={()=>closeWindow(target)}/>
            <div className="minimize" onClick={()=>closeWindow(target)}/>
            <div className="maximize" onClick={() => maximizeWindow(target)}/>

        </div>
    )
}
export default WindowControls
