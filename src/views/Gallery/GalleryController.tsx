import React, { useState, useEffect } from 'react';
import {DocumentData, QueryDocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types";
import GalleryView from "./GalleryView";
import { firestore } from '../../components/App';

const IMAGE_TYP = 1;
const IMAGE = 0;

const GalleryController = () => {

	const [url, setUrl] = useState();
	const [imagesList, setImages] = useState<QueryDocumentSnapshot[][]>();

	const prepareData  = (response: [QuerySnapshot<DocumentData>, QuerySnapshot<DocumentData>]) => {
		const images: QueryDocumentSnapshot[][] = [];
		setUrl(response[IMAGE].docs[0].data().url);

		response[IMAGE_TYP].docs.forEach((dataType) => {
			const filteredImage: QueryDocumentSnapshot[] = response[IMAGE].docs.filter((dataImg) => {
				if(dataType.data().type === dataImg.data().img_type) {
					return  dataImg
				}
			});

			images.push(filteredImage)
		});
		setImages(images.concat(images).concat(images).concat(images));
	};

	useEffect(() => {

		Promise.all([
			firestore.collection("images").get(),
			firestore.collection("types").get()
		]).then(prepareData);

	}, []);

	return (
		<GalleryView imagesList={imagesList} onTypeClick={alert}/>
	);
};

export default GalleryController;
