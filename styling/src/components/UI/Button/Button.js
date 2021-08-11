// import React from 'react';
import styled from 'styled-components';

// import './Button.css';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #3d70b2;
  color: White;
  background: #3d70b2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #3166ac;
    border-color: #3166ac;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
