import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import download from "../../assets/download.svg";
import close from "../../assets/close.svg";
import stars_no_added from "../../assets/stars_no_added.svg";
import stars_added from "../../assets/stars_added.svg";

const HEIGHT_IMAGE_MODAL = window.innerHeight - 200;

const Modal = () => {
	let { url } = useParams();
	let buff = new Buffer(url, "base64");
	let history = useHistory();

	const back = (event) => {
		event.stopPropagation();
		history.goBack();
	};

	const onClickFavorite = () => {
		alert("Added to favorites")
	};

	const onClickDownload = () => {
		alert("Downloading")
	};

	return(
		<Background>
      <ModalStyle>
        <Image src={buff.toString('ascii')} />
      </ModalStyle>
			<IconContainer>
				<IconButton src={stars_no_added} onClick={onClickFavorite}/>
				<IconButton src={close} onClick={back}/>
				<IconButton src={download} onClick={onClickDownload}/>
			</IconContainer>
		</Background>
	)
};

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
 	background: rgba(0,0,0,0.55);
 	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ModalStyle = styled.div`
	margin: 20px;
	padding: 15px;
	background-color: #fff1ff;
	border-radius: 10px;
`;

const IconContainer = styled.div`
	height: 60px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const IconButton = styled.img`
	width: 45px;
  height: 45px;
  border: none;
  align-self: center;
  cursor: pointer;
  &:hover {
  	transform: scale(1.1);
  }
`;

const Image = styled.img`
	width: auto;
	height: ${HEIGHT_IMAGE_MODAL}px;
`;

export default Modal;
