import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import { Provider } from 'react-redux';
import mainStore from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>
    <Provider store={mainStore} >
      <App />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
