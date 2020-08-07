import styled from "styled-components";
import image from "../../assets/galleryBackground.png";
import { HEIGHT_IMAGE_MODAL } from "../components/Modal";

export const MainComponent = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  &::after{
  	content: "";
  	background: rgb(26, 31, 41) url(${image}) no-repeat fixed top;
  	opacity: 0.8;
  	background-blend-mode: luminosity;
  	background-size: cover;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;
  	position: absolute;
  	z-index: -1;
  }
`;

export const ScrollView = styled.div`
	margin: 0 auto;
	height: 100vh;
	width: 100vw;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IconContainer = styled.div`
	height: 60px;
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconButton = styled.img`
	width: 45px;
  height: 45px;
  border: none;
  align-self: center;
  cursor: pointer;
  &:hover {
  	transform: scale(1.1);
  }
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
 	background: rgba(0,0,0,0.55);
 	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ModalStyle = styled.div`
	margin: 20px;
	padding: 15px;
	background-color: #fff1ff;
	border-radius: 10px;
`;

export const Image = styled.img`
	width: auto;
	height: ${HEIGHT_IMAGE_MODAL}px;
`;

export const ImageCard = styled.img`
	height: auto;
	width: 400px;
  background-size: cover;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transform: scale(1.01);
  transition: transform 1s ease, box-shadow .5s;
    &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  cursor: pointer;
`;

export const CardStyle = styled.div`
  width: 100%;
 	height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  transition: .5s;
  &:hover {
     box-shadow: 0 0 15px rgba(0, 0, 0, 1);
  }
  object-fit: cover;
  cursor: pointer;
`;

export const ImageCardType = styled.img<{imgUrl: string}>`
 	width: 100%;
 	height: 100%;
  background: url(${props => props.imgUrl})no-repeat center center;
  background-size: cover;
  transform: scale(1.01);
  transition: transform 1s ease;
    &:hover {
    transform: scale(1.05);
  }
`;
