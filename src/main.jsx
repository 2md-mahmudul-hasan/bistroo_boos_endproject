import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Routes/Routers.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-screen-xl bg-white mx-auto p-4">
      <RouterProvider router={Routers} />
    </div>

  </React.StrictMode>,
)
