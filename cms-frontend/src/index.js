import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {apollo}  from './configuration/apollo'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Wrapper = (
  <ApolloProvider client={apollo}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(
       Wrapper,
    document.getElementById('root'));
registerServiceWorker();
