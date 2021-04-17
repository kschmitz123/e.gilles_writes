import React, { useState, useEffect } from "react"

import {
  carousel,
  carouselContainer,
  carouselWrapper,
  carouselContent,
} from "./carousel.module.scss"

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div className={carousel}>
      <div className={carouselContainer}>
        <button onClick={prev}>&lt;</button>
        <div className={carouselWrapper}>
          <div
            className={carouselContent}
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {children}
          </div>
        </div>
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  )
}

export default Carousel
