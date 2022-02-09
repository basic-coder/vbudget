import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId='ee56f4af-c2fc-4bbe-b2ed-4ec2376d6954' language='en-US'>
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

