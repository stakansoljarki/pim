import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss'
import Header from "./app/layouts/header/Header";
import Composite from "./app/layouts/composite/Composite";
import About from "./app/layouts/About/About";
import Product from "./app/layouts/product/Product";
import Characteristics from "./app/layouts/Characteristics/Characteristics";
import Contacts from "./app/layouts/Contacts/Contacts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Composite/>
    <About/>
    <Product/>
    <Characteristics/>
    <Contacts/>
  </React.StrictMode>
);

