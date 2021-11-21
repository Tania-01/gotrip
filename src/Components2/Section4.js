import React from 'react';
import '../App.css';
import Button from './Button';
import Paragraph from './Paragraph';
import Navbar from '../img/Navbar';

function Section4() {
  return (
    <div className="Section4">
  <div className="Section4__block">
<Paragraph class="Section4__block__text" value="Prepare Yourself And
Start Exploring With Us." />
<Paragraph class="text__Section4" value="There's the best discount for you today."/>
<Button class="Section__btn" value="Get Started"/>
  </div>
  <Paragraph class="Section4__text" value="Subscribe
To Our Newsletter"/>
<div className="Section__input">
    <input className="Input" type="email" placeholder="Yourmail@mail.com"/>
    <Button class="input__submit" value="Subscribe"/>

</div>
    </div>
  );

}
export default Section4;