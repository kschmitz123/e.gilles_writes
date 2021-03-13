import React from "react"
import { poem, timestamp } from "./poem.module.css"

export default function Poem({ content, createdAt }) {
  return (
    <div className={poem}>
      {content}
      <div className={timestamp}> {createdAt}</div>
    </div>
  )
}
