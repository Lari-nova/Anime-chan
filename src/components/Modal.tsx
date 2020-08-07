import React from "react";
import { useHistory, useParams } from "react-router-dom";
import download from "../../assets/download.svg";
import close from "../../assets/close.svg";
import stars_no_added from "../../assets/stars_no_added.svg";
import stars_added from "../../assets/stars_added.svg";
import { FAVORITE_KEY } from "../constants/const";
import { Background, IconButton, IconContainer, ModalStyle, Image } from "../styles/StyleComponents";

export const HEIGHT_IMAGE_MODAL = window.innerHeight - 200;


const Modal = () => {
	let { url } = useParams();
	let buff = new Buffer(url, "base64");
	let history = useHistory();
	let encodingUrl = buff.toString('ascii');


	const back = (event) => {
		event.stopPropagation();
		history.goBack();
	};

	const onClickFavorite = () => {
		const urlsArray: string[] = [];
		urlsArray.push(encodingUrl);
		localStorage.setItem(FAVORITE_KEY, JSON.stringify(urlsArray));
	};

	const onClickDownload = () => {
		alert("Downloading")
	};

	return(
		<Background>
      <ModalStyle>
        <Image src={encodingUrl} />
      </ModalStyle>
			<IconContainer>
				<IconButton src={stars_no_added} onClick={onClickFavorite}/>
				<IconButton src={close} onClick={back}/>
				<IconButton src={download} onClick={onClickDownload}/>
			</IconContainer>
		</Background>
	)
};

export default Modal;
