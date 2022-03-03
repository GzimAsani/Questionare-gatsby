import { Link } from "gatsby"
import React from "react"
import Navbar from "../components/Navbar"
const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Oops! This page does not exist!</h1>
      </div>
      <Link to="/1">
        <button>Go back!</button>
      </Link>
    </div>
  )
}

export default ErrorPage
