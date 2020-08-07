import React from "react";
import { ScrollView } from "../../styles/StyleComponents";
import styled from "styled-components";
import FavoriteCard from "../../components/FavoriteCard";

interface Props {
	imagesList: Array<string> | null,
}

const FavoritesView = ({ imagesList }: Props) => {

	const renderBody = (images: Array<string> | null) => {
		if (images != null) {
			return images.map((url) => (
				<CardContainer key={url}>
					<FavoriteCard url={url} />
				</CardContainer>
			))
		}
		return null;
	};

	return(
		<ScrollView>
			{renderBody(imagesList)}
		</ScrollView>
	);
};

const CardContainer = styled.div`
	padding: 10px;
`;

export default FavoritesView;
