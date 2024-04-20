import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './AuthContexProvider'
function PrivateRoutes() {
  const { isLoggedIn, setIsLoggedIn} = useAuth()
  return isLoggedIn ? <Outlet/> : <Navigate to ="/login"/>
}

export default PrivateRoutes
