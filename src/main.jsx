import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetGlobalStyles } from './ResetGlobalStyles/resetStyles.js';
import App from './Pages/PageInitial/index.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetGlobalStyles/>
    < App/>
  </React.StrictMode>,
)
