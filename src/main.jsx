import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CurrentTopic from './pages/CurrentTopic.jsx'
import CurrentImage from './pages/CurrentImage.jsx'
import Error from './pages/Error.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/photo/:photoId',
        element: <CurrentImage/>
      },
      {
        path: '/t/:topicName',
        element: <CurrentTopic/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
