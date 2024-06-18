import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function PrivateRoutes() {

  // const token = window.cookies()
  // console.log(token)

  // const cookies = new Cookies();
  // const checkToken = cookies.get("checkToken");

  const {currentEmploye} = useSelector(state => state.employe)

  console.log("charles")
  console.log(currentEmploye)

  
  return (
    currentEmploye ? <Outlet/>:<Navigate to="/login"/>
  )
}
