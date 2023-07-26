import './wdyr';
import React from 'react';
import { Provider } from 'react-redux';
import { stores } from './app/store';
import * as ReactDOMClient from 'react-dom/client';
import App from './Components/App';

const container = document.getElementById('root') as HTMLElement;
const rooter = ReactDOMClient.createRoot(container);

rooter.render(
     <Provider store={stores}>
          <App/>
     </Provider>
);