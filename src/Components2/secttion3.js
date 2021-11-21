import React from 'react';
import '../App.css'
import section from '../img/section3 .png'
import Paragraph from "./Paragraph";
import Users from "./Users";
function Section3() {
    return (
        <div className="Section3">
            <div className="section3_photo">
          <img  src={section} />
            </div>
            <div>
               <Users/>
            </div>
        </div>
    );
}

export default Section3;