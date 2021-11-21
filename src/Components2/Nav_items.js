import React from 'react';
import Paragraph from './Paragraph';
import '../App.css';
import Button from './Button';
import Burger from './Burger';

function Items() {
  return (
    <div>
    <div className="items">
<Paragraph class="logo1" value="GoTrieop"/>
  <a>Home</a>
  <a>About</a>
  <a>Reviews</a>
  <a>Subscribe</a>
      </div>
      <Button class="nav__button" value="Login"/>
    <Burger/>
    </div>
  );

}

export default Items;
