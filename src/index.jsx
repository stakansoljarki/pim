import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss'
import "./i18n"
import Header from "./app/layouts/Header/Header";
import Composite from "./app/layouts/Composite/Composite";
import About from "./app/layouts/About/About";
import Product from "./app/layouts/Product/Product";
import Lira from "./app/layouts/Lira/Lira";
import Characteristics from "./app/layouts/Characteristics/Characteristics";
import Contacts from "./app/layouts/Contacts/Contacts";
import Specification from "./app/layouts/Specification/Specification";
import Projects from "./app/layouts/Projects/Projects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Composite/>
      <About/>
      <Product/>
      <Lira/>
      <Characteristics/>
      <Specification/>
      <Projects/>
      <Contacts/>
  </React.StrictMode>
);

