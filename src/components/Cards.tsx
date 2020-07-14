import React from "react";
import styled from "styled-components";

interface Props {
	url: string,
}

const Cards = ({ url }: Props) => (
	<ImageStyle  src={url} />
);

const ImageStyle = styled.img`
	height: auto;
	width: 400px;
  display: block;
  background-size: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: scale(1.01);
  transition: transform 1s ease, box-shadow .5s;
    &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  cursor: pointer;
`;

export default Cards;
