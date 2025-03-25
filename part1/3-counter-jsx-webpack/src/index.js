import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);
root.render([<App key={1}/>,<App key={2}/>]);
