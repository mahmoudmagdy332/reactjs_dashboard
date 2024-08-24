import { CssBaseline } from '@mui/material'
import React, { useEffect } from 'react'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Cookies from "js-cookie";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const location = useLocation();
  
  if (!Cookies.get("access_token")){
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
       <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Outlet />
          </main>
        <div/>
    </div>
    </div>
  )
}

export default Layout
