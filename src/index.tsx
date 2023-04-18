import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './assets/sass/main.scss';
import MainLayout from './layout/main_layout';
import Banner from './components/Banner';
import Hero from './components/Hero';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MainLayout>
      <Banner />
      <Hero />
    </MainLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
