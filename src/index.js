import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Update the ReactDOM.render call to use createRoot
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
