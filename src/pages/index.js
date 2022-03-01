import { Link } from "gatsby"
import React from "react"
import * as contentStyle from "../assets/css/index.module.css"

export default function Home() {
  return (
    <div className={contentStyle.index}>
      <h2>Welcome page</h2>
      <Link to="/1">
        <button>Next</button>
      </Link>
    </div>
  )
}
