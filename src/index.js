import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Componentes/NavBar';
import ContainerApp from './Componentes/ContainerApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <ContainerApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
