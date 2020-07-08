import React from "react";
import styled from "styled-components";
import image from "../../../assets/galleryBackground.png";
import CardTypes from "../../components/CardTypes";
import {QueryDocumentSnapshot} from "@firebase/firestore-types";

interface Props {
	imagesList: QueryDocumentSnapshot[][] | undefined,
	onTypeClick: (type: string) => void,
}

const GalleryView = ({imagesList, onTypeClick}: Props) => {

	const renderBody = () => {
		if (imagesList) {
			return imagesList.map((imageArray) => (
				<CardContainer>
					<CardTypes url={imageArray[0].data().url} type={imageArray[0].data().img_type} handleClick={(type) => {
						alert(type);
					}}/>
				</CardContainer>
			))
		}
		return null;
	};

	return(
			<ScrollView>
				<Row>
					{renderBody()}
				</Row>
			</ScrollView>
	);
};

const ScrollView = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  align-items: center; 
  flex-direction: column;
`;

const Row = styled.div`
	width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  @media (max-width: 1400px) { 
  	width: 100%;
  }
`;

const CardContainer = styled.div`
	padding: 10px;
`;

export default GalleryView;

