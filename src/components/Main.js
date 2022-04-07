import React from "react";
import './Main.css';
import videoFondo from './videos/heladoDerretido.mp4';


function MainComp() {
    return <div className="mainVideoCont">
            <video autoplay muted loop className="videoCont">
            <source src={videoFondo} type="video/mp4"/>
        </video>
    </div>
};

export default MainComp;