import React, { useEffect, useRef, useState } from "react";
import { ImageCard } from "../styles/StyleComponents";

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
		<ImageCard style={{gridRowEnd: `span ${spans}`, ...style}} ref={imgRef} src={url} onClick={() => handleClick(url)}/>
	);
};

export default Card;
