import React from "react";
import styled from "styled-components";
const CardTypes = ({ url, type, handleClick }) => {
    return (React.createElement(CardStyle, { onClick: () => handleClick(type) },
        React.createElement(ImageStyle, { imgUrl: url })));
};
const CardStyle = styled.div `
  width: 100%;
 	height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  transition: .5s;
  &:hover {
     box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  object-fit: cover;
`;
const ImageStyle = styled.img `
 	width: 100%;
 	height: 100%;
  background: url(${props => props.imgUrl})no-repeat center center;
  background-size: cover;
  transform: scale(1.01);
  transition: transform 1s ease;
    &:hover {
    transform: scale(1.1);
  }
`;
export default CardTypes;
//# sourceMappingURL=CardTypes.js.map