import React from "react";
import styled from "styled-components";
import image from "../../../assets/galleryBackground.png";
import CardTypes from "../../components/CardTypes";
const GalleryView = ({ imagesList, onTypeClick }) => {
    const renderBody = () => {
        if (imagesList) {
            return imagesList.map((imageArray) => (React.createElement(CardContainer, null,
                React.createElement(CardTypes, { url: imageArray[0].data().url, type: imageArray[0].data().img_type, handleClick: (type) => {
                        alert(type);
                    } }))));
        }
        return null;
    };
    return (React.createElement(MainComponent, null,
        React.createElement(ScrollView, null,
            React.createElement(Row, null, renderBody()))));
};
const MainComponent = styled.div `
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
const ScrollView = styled.div `
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  align-items: center; 
  flex-direction: column;
`;
const Row = styled.div `
	width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  @media (max-width: 1400px) { 
  	width: 100%;
  }
`;
const CardContainer = styled.div `
	padding: 10px;
`;
export default GalleryView;
//# sourceMappingURL=GalleryView.js.map