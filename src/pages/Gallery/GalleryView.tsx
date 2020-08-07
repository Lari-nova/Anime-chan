import React, { useMemo } from "react";
import styled from "styled-components";
import CardTypes from "../../components/CardTypes";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import { ScrollView } from "../../styles/StyleComponents";

interface Props {
	imagesList: Array<QueryDocumentSnapshot> | undefined,
	onTypeClick: (type: string) => void,
}

const GalleryView = ({imagesList, onTypeClick}: Props) => {
	const renderBody = (images: Array<QueryDocumentSnapshot> | undefined) => {
		if (images != undefined) {
			return images.map((querySnapshot) => (
				<CardContainer key={querySnapshot.data().img_url}>
					<CardTypes url={querySnapshot.data().img_url} type={querySnapshot.data().type} handleClick={(type) => {
						alert(type);
					}}/>
				</CardContainer>
			))
		}
		return null;
	};

	const memoizedValue = useMemo(() => renderBody(imagesList), [imagesList]);

	return(
		<ScrollView>
			<Row>
				{memoizedValue}
			</Row>
		</ScrollView>
	);
};

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

const GalleryViewMemo = React.memo((props: Props) =>
	<GalleryView imagesList={props.imagesList} onTypeClick={props.onTypeClick} />
);

export default GalleryViewMemo;

