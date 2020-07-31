import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import home from "../../assets/home.svg";
import gallery from "../../assets/gallery.svg";
import female from "../../assets/venus.svg";
import male from "../../assets/mars.svg";
import heart from "../../assets/heart.svg";
import favorite from "../../assets/stars.svg";
import next from "../../assets/next.svg";

const Panel = () => {
	const { push } = useHistory();
	const [isOpen, setOpen] = useState(false);
	const onPressButton = () => {
		setOpen((prevState) => !prevState);
	};

	return(
		<LeftPanel open={isOpen}>
			<div style={{ position: 'absolute', top: 0 }}>
				<IconContainer>
					<IconButton url={home} onClick={() => push("/")} />
					<Title>Home</Title>
				</IconContainer>
				<IconContainer>
					<IconButton url={gallery} onClick={() => push("/gallery")} />
					<Title>Gallery</Title>
				</IconContainer>
				<IconContainer>
					<IconButton url={female} onClick={() => push("/female")} />
					<Title>Female</Title>
				</IconContainer>
				<IconContainer>
					<IconButton url={male} onClick={() => push("/male")} />
					<Title>Male</Title>
				</IconContainer>
				<IconContainer>
					<IconButton url={heart} onClick={() => push("/pairings")} />
					<Title>Pairings</Title>
				</IconContainer>
				<IconContainer>
					<IconButton url={favorite} onClick={() => push("/favorites")} />
					<Title>Favorites</Title>
				</IconContainer>
			</div>
			<ButtonContainer>
				<Button open={isOpen} url={next} onClick={onPressButton} />
			</ButtonContainer>
		</LeftPanel>
	)
};

export default Panel;

const LeftPanel = styled.div<{open: boolean}>`
  max-height: 100vh;
  background-color: #282c34;
  width: 50px;
  transition: width 0.3s;
	display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  ${props => props.open ? css`width: 180px;` : css`width: 50px;`}
`;

const IconContainer = styled.div`
	height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 28px;
  margin: 15px 5px;
`;

const IconButton = styled.div<{ url: string }>`
	width: 30px;
  height: 30px;
  border: none;
  margin-left: 5px;
  align-self: center;
  cursor: pointer;
  background: url(${props => props.url}) no-repeat left;
`;

const Title = styled.p`
	align-self: center;
	margin-left: 10px;
`;

const ButtonContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 30px;
	cursor: pointer;
`;

const Button = styled.div<{ url: string, open: boolean }>`
	width: 40px;
  height: 40px;
  background: url(${props => props.url}) no-repeat left;
  ${props => props.open && css`transform: scaleX(-1);`};
  transition: 0.3s;
  align-self: flex-end;
 	margin-right: 3px;
`;


