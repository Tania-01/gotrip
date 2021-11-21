import React from 'react';
import '../App.css'
import Paragraph from "./Paragraph";
import Icon from "../img/User_icon.png"
function Users() {
    return (
        <div className="user">
            <Paragraph class="oval__text" value="What do customers say about us?"/>
            <div className="user__oval">
                <img className="icon" src={Icon}/>
                <Paragraph class="Text__User" value="Alpanasap"/>
                <Paragraph class="Text__Country" value="Japung, Indonesia"/>
            </div>
            <Paragraph class="user__text" value="Very satisfying service makes it comfortable, a beautiful place in the world. "/>
        </div>
    );
}

export default Users;