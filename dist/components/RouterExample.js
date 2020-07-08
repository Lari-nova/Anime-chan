import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css } from 'styled-components';
const Container = styled.div `
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  width: 100vw;
`;
const LeftPanel = styled.div `
  height: 100vh;
  background-color: #282c34;
  width: 130px;
  transition: width 0.3s;
  ${props => props.open ? css `width: 200px;` : css `width: 130px;`}
`;
const LeftBottom = styled.div `
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;  
`;
const Button = styled.div `
  width: 100px;
  height: 40px;
  background-color: lightgray;
  align-self: center;
  :hover {
    background-color: darkgray;
  }
`;
export default function RouterExample() {
    const [isOpen, setOpen] = useState(false);
    console.log(process.env.NODE_ENV);
    const onPressButton = () => {
        setOpen((prevState) => !prevState);
    };
    return (React.createElement(Router, null,
        React.createElement(Container, null,
            React.createElement(LeftPanel, { open: isOpen },
                React.createElement("ul", { style: { backgroundColor: '#765' } },
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/" }, "Home")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/about" }, "About")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/dashboard" }, "Dashboard"))),
                React.createElement(LeftBottom, null,
                    React.createElement(Button, { onClick: onPressButton }))),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/" },
                    React.createElement(Home, null)),
                React.createElement(Route, { path: "/about" },
                    React.createElement(About, null)),
                React.createElement(Route, { path: "/dashboard" },
                    React.createElement(Dashboard, null))))));
}
const HomeContainer = styled.div `
  background-color: #61dafb;
  width: 100%;
`;
function Home() {
    return (React.createElement(HomeContainer, null,
        React.createElement("h2", null, "Home")));
}
function About() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "About")));
}
function Dashboard() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Dashboard")));
}
//# sourceMappingURL=RouterExample.js.map