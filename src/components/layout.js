import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 e.gilles_writes</p>
      </footer>
    </div>
  )
}
