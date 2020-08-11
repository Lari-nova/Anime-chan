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
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const storage = localStorage.getItem(FAVORITE_KEY);
		if (storage != null) {
			const newArray = JSON.parse(storage);
			const image = newArray.find(image => image === encodingUrl);
			if (image) {
				setIsFavorite(true);
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
			setIsFavorite(true);
		} else {
			const newArray = JSON.parse(array);
			const image = newArray.find(image => image === encodingUrl);
			if (image) {
				setIsFavorite(false);
				const array = newArray.filter(item => item !== encodingUrl);
				localStorage.setItem(FAVORITE_KEY, JSON.stringify(array));
			} else {
				setIsFavorite(true);
				newArray.push(encodingUrl);
				localStorage.setItem(FAVORITE_KEY, JSON.stringify(newArray));
			}
		}
	};

	const onClickDownload = () => {
		fetch(encodingUrl).then((response) => response.blob()).then((blob) => {
			const a = document.createElement('a');
			a.href = URL.createObjectURL(blob);
			a.download = "image.jpg";
			a.click();
			URL.revokeObjectURL(a.href)
		})
	};

	return(
		<Background>
      <ModalStyle>
		      <Image src={encodingUrl} />
      </ModalStyle>
			<IconContainer>
				<IconButton src={isFavorite ? stars_added : stars_no_added} onClick={onClickFavorite}/>
				<IconButton src={close} onClick={back}/>
				<IconButton src={download} onClick={onClickDownload}/>
			</IconContainer>
		</Background>
	)
};

export default Modal;
