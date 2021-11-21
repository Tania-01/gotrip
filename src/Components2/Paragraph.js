import React from 'react';
function Paragraph(props) {
    return (
        <p className={props.class}>
            {props.value}
        </p>
     );
  }
  export default Paragraph;
