import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CurrentTopic from './pages/CurrentTopic.jsx'
import CurrentImage from './pages/CurrentImage.jsx'
import Error from './pages/Error.jsx'
import { ApiContextProvider } from './contexts/ApiContext.jsx'
import Search from './pages/Search.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <ApiContextProvider><App/></ApiContextProvider>,
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
      },
      {
        path: '/s/photos/:searchInput',
        element: <Search/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  // <React.StrictMode>
  // </React.StrictMode>,
)
