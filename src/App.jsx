import styles from "./App.module.css"
import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Background from "./components/Background"
import LoadingBar from "./components/LoadingBar"

const About = lazy(() => import("./components/About"))
const Home = lazy(() => import("./components/Home"))


function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.loadingBar}>
        <LoadingBar />
      </div>
      <Navbar />
      <Background />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />
        },
        {
          path: "/home",
          element: (
            <Suspense fallback={<div className={styles.loading}>Loading Game...</div>}>
              <Home />
            </Suspense>
          )
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<div className={styles.loading}>Loading About...</div>}>
              <About />
            </Suspense>
          )
        }
      ]
    }
  ], 
  { basename: "/rock-paper-scissor/" }
)


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
