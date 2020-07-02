import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import logo from '../../logo.svg';
import '../../App.css';
import styled from "styled-components";
import CardTypes from "../../components/CardTypes";
import {DocumentData, QueryDocumentSnapshot, QuerySnapshot} from "@firebase/firestore-types";

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

const Gallery = () => {

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

		setImages(images);

	};

	useEffect(() => {
		const firebaseInstance = firebase.initializeApp(firebaseConfig);
		const firestore = firebaseInstance.firestore();

		Promise.all([
			firestore.collection("images").get(),
			firestore.collection("types").get()
		]).then(prepareData);

	}, []);

	const renderBody = () => {
		if (imagesList) {
			return imagesList.map((imageArray) => (
				<CardTypes url={imageArray[0].data().url} type={imageArray[0].data().img_type} handleClick={(type) => {
					alert(type);
				}}/>
			))
		}

		return null;
	};

	return (
		<MainComponent>
			<ScrollView>
				{renderBody()}
			</ScrollView>
		</MainComponent>
	);
};



const MainComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background: #61dafb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollView = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  align-items: center; 
  flex-direction: column;
`;

export default Gallery;