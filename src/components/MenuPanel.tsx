import React, { useState } from "react";
import styled, { css } from "styled-components";
import {useHistory, Switch, Route, Link } from "react-router-dom";
import home from "../../assets/home.svg";
import favorite from "../../assets/star.svg";
import gallery from "../../assets/art.svg";
import Home from "../views/Home";
import GalleryController from "../views/Gallery/GalleryController";
import Favorites from "../views/Favorites";


const MenuPanel = () => {

	const { push } = useHistory();
	const [isOpen, setOpen] = useState(false);
	console.log(process.env.NODE_ENV);
	const onPressButton = () => {
		setOpen((prevState) => !prevState);
	};

	return(
		<Container>
			<LeftPanel open={isOpen}>
				<div style={{
					height: 400
				}}>
					<IconButton url={home} onClick={() => push("/")}>Home Page</IconButton>
					<IconButton url={gallery} onClick={() => push("/gallery")}>Gallery</IconButton>
					<IconButton url={favorite}  onClick={() => push("/favorites")}>Favorites</IconButton>
				</div>

				<ButtonContainer>
					<Button onClick={onPressButton} />
				</ButtonContainer>
			</LeftPanel>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/gallery">
					<GalleryController />
				</Route>
				<Route path="/favorites">
					<Favorites />
				</Route>
			</Switch>
		</Container>
	);
};

const IconButton = styled.div<{ url: string }>`
	width: 110px;
  height: 50px;
  background: url(${props => props.url}) no-repeat left;
`;

const Icon = styled.img`
	width: 100px;
  height: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  width: 100vw;
`;

const LeftPanel = styled.div<{open: boolean}>`
  max-height: 100vh;
  background-color: #282c34;
  width: 130px;
  transition: width 0.3s;
	display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  ${props => props.open ? css`width: 200px;` : css`width: 130px;`}
`;

const ButtonContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-color: antiquewhite;
  align-self: flex-end;
  padding-bottom: 30px;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: lightgray;
  :hover {
    background-color: darkgray;
  }
`;

export default MenuPanel;
