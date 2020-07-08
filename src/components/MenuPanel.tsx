import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import GalleryController from "../views/Gallery/GalleryController";
import home from "../../assets/home.svg";
import favorite from "../../assets/star.svg";
import gallery from "../../../assets/art.svg";


const MenuPanel = () => {

	const [isOpen, setOpen] = useState(false);
	console.log(process.env.NODE_ENV);
	const onPressButton = () => {
		setOpen((prevState) => !prevState);
	};

	return(
		<Container>
			<LeftPanel open={isOpen}>
				<ul style={{ backgroundColor: '#765' }}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
				</ul>
				<LeftBottom>
					<Button onClick={onPressButton} />
				</LeftBottom>
			</LeftPanel>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/gallery">
					<GalleryController />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Container>
	);
};

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  width: 100vw;
`;

const LeftPanel = styled.div<{open: boolean}>`
  height: 100vh;
  background-color: #282c34;
  width: 130px;
  transition: width 0.3s;
  ${props => props.open ? css`width: 200px;` : css`width: 130px;`}
`;

const LeftBottom = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;  
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: lightgray;
  align-self: center;
  :hover {
    background-color: darkgray;
  }
`;

export default MenuPanel;
