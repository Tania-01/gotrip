import React from 'react';
import Photo from "../img/Mask Group.png";
import Button from "./Button"
import Paragraph from "./Paragraph"
function content() {
    return (
        <div className="Cont">
            <div className="content">
                <Button class="btn__content" value="exsplore the world" />
                <Paragraph class="text__content" value="Explore The Natural Beauty Of Halmahera
With Us" />
                <Paragraph class="text" value="explore the beauty of god's earth in a beautiful forest and have fun"/>
                <Button class="button__content" value="Exsplore Now" />
            </div>
            <img className="Photo" src={Photo}/>
        </div>
    );
}
export default content;