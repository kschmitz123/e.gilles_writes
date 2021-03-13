import React from "react"
import { Link } from "gatsby"
import {
  headerPart1,
  headerPart2,
  heading,
  triangleDown,
} from "./header.module.css"

export default function Header() {
  return (
    <header>
      <div className={triangleDown}></div>
      <div className={heading}>
        <h1 className={headerPart1}>e.gilles</h1>
        <h1 className={headerPart2}>writes</h1>
      </div>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/poems">Poems</Link>
        <Link to="/stories">Stories</Link>
      </ul>
    </header>
  )
}
