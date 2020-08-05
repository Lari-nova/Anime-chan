import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
	url: string,
	style?: React.CSSProperties,
	handleClick: (url: string) => void,
}

const Card = ({ url, style, handleClick}: Props) => {
	const [spans, setSpans] = useState<number>(0);
	const imgRef = useRef<HTMLImageElement | null>(null);

	const loadListener = () => {
		const height = imgRef.current?.clientHeight;
		// @ts-ignore
		setSpans(Math.ceil(height / 25));
	};

	useEffect(() => {
		// @ts-ignore
		imgRef.current.addEventListener("load", loadListener);
		return () => imgRef.current?.removeEventListener("load", loadListener)
	});

	return(
		<ImageStyle style={{gridRowEnd: `span ${spans}`, ...style}} ref={imgRef} src={url} onClick={() => handleClick(url)}/>
	);
};

const ImageStyle = styled.img`
	height: auto;
	width: 400px;
  background-size: cover;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: scale(1.01);
  transition: transform 1s ease, box-shadow .5s;
    &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  cursor: pointer;
`;

export default Card;
