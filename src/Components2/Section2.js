import '../App.css'
import Slider from "./Slider";
import Paragraph from "./Paragraph"
import Button from "./Button";
import React from "react";

function Section2() {
    return (
        <div className="Section2__cont">
            <div>
                <Paragraph class="Section__text" value="About" style={{color:"black"}}  />
                <Paragraph class="text__cont" value="Destinations"/>
                <Paragraph class="text2" value="explore the beauty of god's earth in a beautiful forest and have fun" />
                <Button class="section2__button" value="Exsplore Now"/>
                <Slider/>
            </div>


        </div>

    );
}

export default Section2;