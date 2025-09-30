import { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router'
import NavBar from "./NavBar";  
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';

function Layout({handleLogout,isAuthenticated}) {
  return (
    <>
    <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
     <main style={{ minHeight: "100vh", marginTop: "1rem" }}>
     <Outlet /> 
     </main>
    </>
  )
}

function App() {

   const[isAuthenticated,setIsAuthenticated]=useState(false)
   const[redirectPath,setRedirectPath]=useState("/services")

   const handleLogin =() =>{
    setIsAuthenticated(true); 
  }
   const handleLogout = () => {
    setIsAuthenticated(false); 
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout handleLogout={handleLogout} isAuthenticated={isAuthenticated} />,  // parent avec NavBar
      children: [
        { index: true, element: <Home /> },
        { path: 'login',  element: <Login onLogin={handleLogin} redirectPath={redirectPath} /> }, 
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'services', element: <ProtectedRoute isAuthenticated={isAuthenticated} element={<Services /> } path={setRedirectPath} /> },
      ]
    }
  ])

  return (
 <>
  <RouterProvider router={router} />
 </>
  );
 
}

export default App
