import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Sum, App } from './App';
import registerServiceWorker from './registerServiceWorker';
require("http-parser-js").HTTPParser = global.HTTPParser =
  require("http-parser-js").HTTPParser;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
