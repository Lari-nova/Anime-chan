import React from "react";
import styled from "styled-components";
import { QueryDocumentSnapshot } from "@firebase/firestore-types";
import Card from "../../components/Card";
import {
	BrowserRouter as Router,
	Link,
	useHistory,
	useLocation,
	useParams
} from "react-router-dom";
import Modal from "../../components/Modal";

interface Props {
	urlList: Array<QueryDocumentSnapshot> | undefined,
	onEndPage: () => void,
	onCardClick: (url: string) => void,
}

const KindView = ({urlList, onEndPage, onCardClick}: Props) => {
	const renderBody = (images: Array<QueryDocumentSnapshot> | undefined) => {
		if (images != undefined) {
			return images.map((querySnapshot) => (
				<CardContainer key={querySnapshot.data().url}>
					<Card url={querySnapshot.data().url} handleClick={onCardClick}/>
				</CardContainer>
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
			{renderBody(urlList)}
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

const CardContainer = styled.div`
	padding: 30px;
`;

export default KindView;
