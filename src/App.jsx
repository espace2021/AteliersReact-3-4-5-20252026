import { RouterProvider, createBrowserRouter, Outlet } from 'react-router'
import NavBar from "./NavBar";  
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login';

function Layout() {
  return (
    <>
    <Login />
   {/*  <NavBar />
      <Outlet /> */}
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,  // parent avec NavBar
      children: [
        { index: true, element: <Home /> },  // "/" → Home
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'services', element: <Services /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
