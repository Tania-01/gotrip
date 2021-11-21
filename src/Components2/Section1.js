import React from 'react';
import backgroud from '../img/Background.png'
import Sectioncontent from "./sectioncontent"
import Navbar from '../img/Navbar';
import "../App.css"

function Section1 () {
    return (
        <div className="Content">
            <Navbar/>
            <Sectioncontent />
            <img className="background" src={backgroud} />
        </div>
    );
}

export default Section1;

