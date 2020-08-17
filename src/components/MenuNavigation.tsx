import React from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import GalleryController from "../pages/Gallery/GalleryController";
import MaleController from "../pages/Kind/MaleController";
import PairingsController from "../pages/Kind/PairingsController";
import FeedController from "../pages/ImageFeed/FeedController";
import FemaleController from "../pages/Kind/FemaleController";
import Panel from "./Panel";
import Modal from "./Modal";
import ImagePage from "../pages/Views/ImagePage";
import FavoritesController from "../pages/Favorites/FavoritesController";
import AnimeController from "../pages/AnimePage/AnimeController";

const MenuNavigation = () => {
	const location = useLocation();
	const background = location.state && location.state.background;

	return(
		<Container>
			<Panel />
			<Switch location={background || location}>
				<Route exact path="/" children={<FeedController />} />
				<Route path="/gallery" children={<GalleryController />} />
				<Route path="/female" children={<FemaleController />} />
				<Route path="/male" children={<MaleController />} />
				<Route path="/pairings" children={<PairingsController />} />
				<Route path="/favorites" children={<FavoritesController />} />
				<Route path="/img/:url" children={<ImagePage />} />
			</Switch>
			{background && <Route path="/img/:url" children={<Modal />} />}
		</Container>
	);
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  width: 100vw;
`;

export default MenuNavigation;
