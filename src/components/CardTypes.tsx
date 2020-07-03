import React from "react";
import styled from "styled-components";

interface Props {
	url: string,
	type: string,
	handleClick: (type: string) => void,
}

const CardTypes = ({ url, type, handleClick }: Props) => {

	return(
		<CardStyle onClick={() => handleClick(type)}>
			<ImageStyle imgUrl={url} />
		</CardStyle>
	)
};
const CardStyle = styled.div`
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

const ImageStyle = styled.img<{imgUrl: string}>`
 	width: 100%;
 	height: 100%;
  background: url(${props => props.imgUrl}) no-repeat center center;
  transform: scale(1.01);
  transition: transform 1s ease;
    &:hover {
    transform: scale(1.1);
  }
`;

export default CardTypes;
