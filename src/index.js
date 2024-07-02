import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore} from "@reduxjs/toolkit";
import sideReducer from "../src/hook/slice"
import { Provider } from "react-redux"
import AppContextProvider from './hook/AppContext';

const store = configureStore({
  reducer: sideReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= { store} >
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);
