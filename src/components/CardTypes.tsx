import React from "react";
import { CardStyle, ImageCardType } from "../styles/StyleComponents";

interface Props {
	url: string,
	type: string,
	handleClick: (type: string) => void,
}

const CardTypes = ({ url, type, handleClick }: Props) => {
	return(
		<CardStyle onClick={() => handleClick(type)}>
			<ImageCardType imgUrl={url} />
		</CardStyle>
	)
};

export default CardTypes;
