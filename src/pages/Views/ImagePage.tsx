import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const HEIGHT_IMAGE_MODAL = window.innerHeight - 50;

const ImagePage = () => {
	let { url } = useParams();
	let buff = new Buffer(url, "base64");

	return(
		<Container>
			<Image src={buff.toString('ascii')} />
		</Container>
	);
};

const Container = styled.div`
	position: absolute;
	top: 20px;
	left: 0;
	bottom: 0;
	right: 0;
 	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Image = styled.img`
	width: auto;
	height: ${HEIGHT_IMAGE_MODAL}px;
`;

export default ImagePage;
