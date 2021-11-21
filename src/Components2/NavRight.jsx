import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    display:block;
    flex-flow: column nowrap;
    z-index:1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    left:200px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: white;
      text-decoration: none
    }
    a:hover{
        
      text-decoration: underline;
      text-decoration-color: #FFD41C;
      }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Reviews</a></li>
      <li><a>Subscribe</a></li>
                  <div className="btn1">
          <Button class="btn" value="Login"/>
      </div>
    </Ul>

  )
}

export default RightNav