import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import { Feed } from './pages/feed'
import { Profile } from './pages/profile'
import { Detail } from './pages/detail'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App/>
  </React.StrictMode>
)
