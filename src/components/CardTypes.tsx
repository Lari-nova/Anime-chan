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
  min-height: 200px;
  width: 400px;
  margin: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  transition: .5s;
  &:hover {
     box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
`;

const ImageStyle = styled.img<{imgUrl: string}>`
  height: 200px;
  width: 400px;
  background: url(${props => props.imgUrl});
  transition: transform 1s ease;
    &:hover {
    transform: scale(1.1);
  }
  object-fit: cover;
`;

export default CardTypes;
