import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import {DocumentData, QueryDocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types";
import GalleryView from "./GalleryView";

const firebaseConfig = {
	apiKey: "AIzaSyAEybk5IYJbjkh0m_1dMEKZ2cfQsumpdh0",
	authDomain: "anime-76000.firebaseapp.com",
	databaseURL: "https://anime-76000.firebaseio.com",
	projectId: "anime-76000",
	storageBucket: "anime-76000.appspot.com",
	messagingSenderId: "963151809403",
	appId: "1:963151809403:web:1b7152c3fac5e40ac28bde",
	measurementId: "G-1EEF72505C"
};

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
		const firebaseInstance = firebase.initializeApp(firebaseConfig);
		const firestore = firebaseInstance.firestore();

		Promise.all([
			firestore.collection("images").get(),
			firestore.collection("types").get()
		]).then(prepareData);

	}, []);

	return (
		<GalleryView imagesList={imagesList} />
	);
};

export default GalleryController;
