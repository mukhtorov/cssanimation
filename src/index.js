import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rotate from './animation/Rotate/index'
import Flip from './animation/Flip'

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const hello = <h1>hello react</h1>

// ReactDOM.render(
//   <div>
//     {hello}
//   </div>
//   ,document.getElementById('root'))