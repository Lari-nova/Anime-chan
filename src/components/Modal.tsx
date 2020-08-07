import React, { useEffect, useState } from "react";
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
	const [srcButton, setSrcButton] = useState(stars_no_added);

	useEffect(() => {
		const storage = localStorage.getItem(FAVORITE_KEY);
		if (storage != null) {
			const newArray = JSON.parse(storage);
			const image = newArray.find(image => image === encodingUrl);
			if (image) {
				setSrcButton(stars_added);
			}
		}
	}, []);

	const back = (event) => {
		event.stopPropagation();
		history.goBack();
	};

	const onClickFavorite = () => {
		let array = localStorage.getItem(FAVORITE_KEY);
		if (array == null) {
			const urlsArray: string[] = [];
			urlsArray.push(encodingUrl);
			localStorage.setItem(FAVORITE_KEY, JSON.stringify(urlsArray));
		} else {
			const newArray = JSON.parse(array);
			const image = newArray.find(image => image === encodingUrl);
			if (!image) {
				setSrcButton(stars_added);
				newArray.push(encodingUrl);
				localStorage.setItem(FAVORITE_KEY, JSON.stringify(newArray));
			}
		}
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
				<IconButton src={srcButton} onClick={onClickFavorite}/>
				<IconButton src={close} onClick={back}/>
				<IconButton src={download} onClick={onClickDownload}/>
			</IconContainer>
		</Background>
	)
};

export default Modal;
