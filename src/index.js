import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './libraries/Normalize.css';
// import App from './App';
// import Main from './modules/project-css/components/Main'
import Main from './modules/project-react/Main.jsx';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
