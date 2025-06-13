import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Navigate from './Components/Navigate.jsx'
import Contact from './Components/Contact.jsx'
import ErrorPage from './Components/ErrorPage.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "navigate",
        element: <Navigate />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
