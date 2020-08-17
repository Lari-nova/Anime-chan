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
			<ImageType>
					{type}
			</ImageType>
			<ImageCardType imgUrl={url} />
		</CardStyle>
	)
};

const CardStyle = styled.div`
  width: 100%;
 	height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: .5s;
  &:hover {
     box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  object-fit: cover;
  cursor: pointer;
`;

const ImageType = styled.div`
	background-color: rgba(0,0,0,0.49);;
	color: white;
	font-size: 20pt;
	padding: 10px;
	position: absolute;
	bottom: 0;
	height: 30px;
	width: 100%;
	z-index: 2;
`;

const ImageCardType = styled.img<{imgUrl: string}>`
 	width: 100%;
 	height: 100%;
  background: url(${props => props.imgUrl})no-repeat center center;
  background-size: cover;
  transform: scale(1.01);
  transition: transform 1s ease;
    &:hover {
    transform: scale(1.05);
  }
`;

export default CardTypes;
