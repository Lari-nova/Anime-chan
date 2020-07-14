import React, { useState, useEffect } from 'react';
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { firestore } from '../../components/App';
import GalleryViewMemo from "./GalleryView";

const GalleryController = () => {

	const [imagesList, setImages] = useState<Array<QueryDocumentSnapshot>>();

	useEffect(() => {
		firestore.collection("types").get().then((response) => {
			setImages(response.docs);
		})
	}, []);

	return (
		<GalleryViewMemo imagesList={imagesList} onTypeClick={alert}/>
	);
};

export default GalleryController;
