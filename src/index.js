import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import { Provider } from 'react-redux';

import { PersistGate } from "redux-persist/integration/react";

import { mainStore, persistor } from "./redux/store"



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>
    <Provider store={mainStore} >
 
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    
    
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
