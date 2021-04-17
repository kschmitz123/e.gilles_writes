import React from "react"
import { Link } from "gatsby"
import { heading, triangleDown } from "./header.module.scss"

export default function Header() {
  return (
    <header>
      <div className={triangleDown}></div>
      <div className={heading}>
        <h1>e.gilles</h1>
        <h1>writes</h1>
      </div>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/poems">Poems</Link>
        <Link to="/stories">Stories</Link>
      </ul>
    </header>
  )
}
