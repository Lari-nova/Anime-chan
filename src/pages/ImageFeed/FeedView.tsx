import React from "react";
import styled from "styled-components";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import Cards from "../../components/Card";
import { ScrollView } from "../../styles/StyleComponents";

interface Props {
	documentList: Array<QueryDocumentSnapshot> | undefined,
	onEndPage: () => void,
}

const FeedView = ({documentList, onEndPage}: Props) => {
	const renderBody = (images: Array<QueryDocumentSnapshot> | undefined) => {
		if (images != undefined) {
			return images.map((querySnapshot) => (
				// @ts-ignore
					<Cards url={querySnapshot.data().url} style={{marginTop: 10}}/>
			))
		}
		return null;
	};

	const onHandleScroll = (e: React.UIEvent<HTMLElement>) => {
		const event = e.target as HTMLElement;
		if (event.scrollHeight - event.scrollTop === event.clientHeight) {
			onEndPage();
		}
	};

	return(
		<ScrollView onScroll={onHandleScroll}>
			<CardContainer>
				{renderBody(documentList)}
			</CardContainer>
		</ScrollView>
	);
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  grid-auto-rows: auto;
`;

export default FeedView;
