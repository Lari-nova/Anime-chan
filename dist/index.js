import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterExample from "./components/RouterExample";
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(RouterExample, null)), document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map