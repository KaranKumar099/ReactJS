import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import ProjectItem from './components/ProjectItem'

const router=createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          {
            path: ":projectId",
            element: <ProjectItem />
          }
        ]
      }
      // {
      //   path: "projects/:projectId",
      //   element: <ProjectItem />
      // }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
