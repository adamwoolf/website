import React from 'react';
import ReactDOM from 'react-dom';
import * as contentful from 'contentful'

import App from './App'

const client = require('contentful').createClient({
  space: 'a9ly9rah62ns',
  accessToken: 'hO5sRsMG9k4UpzhQhX44CTG2-mE39O2ZolIvEzgBMJY'
})

client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
    }
  })
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

