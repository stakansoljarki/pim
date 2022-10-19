import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss'
import Header from "./app/layouts/Header/Header";
import Composite from "./app/layouts/Composite/Composite";
import About from "./app/layouts/About/About";
import Product from "./app/layouts/Product/Product";
import Characteristics from "./app/layouts/Characteristics/Characteristics";
import Contacts from "./app/layouts/Contacts/Contacts";
import Specification from "./app/layouts/Specification/Specification";
import Projects from "./app/layouts/Projects/Projects";
import Video from "./app/layouts/Video/Video";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Composite/>
    <About/>
    <Product/>
    <Characteristics/>
    <Specification/>
    <Projects/>
    <Video/>
    <Contacts/>
  </React.StrictMode>
);

