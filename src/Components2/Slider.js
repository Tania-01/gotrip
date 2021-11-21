import React, { Component } from 'react';
import Slider from "react-slick";
import Photo1 from "./slider1.png";
import Photo2 from "./slider2.png";
export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div className="container">
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <style>{cssstyle}</style>

                <Slider {...settings}>
                    <div>
                        <img className="slid" src={Photo1} />
                    </div>
                    <div>
                    <img className="slid" src={Photo2} />
                    </div>
                    <div>
                        <img className="slid"src={Photo1} />
                    </div>
                    <div>
                        <img className="slid"src={Photo2} />
                    </div>
                    <div>
                        <img className="slid" src={Photo2} />
                    </div>
                </Slider>
            </div>
        );
    }
}

const cssstyle = `
.container {
top:10px;
left:1200px;  
  width: 800px;
}
.slid{
    width:200px;
    margin: 10px;
     position: relative;
    text-align: center;
}
.slick-next:before, .slick-prev:before {
   display:none
}
.center .slick-center .slid{
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.48);
    transform: scale(1.08);
}
.center .slid{
    transition: all .3s ease;
}`
