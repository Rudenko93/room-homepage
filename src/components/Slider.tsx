import { useState } from "react"
import { data } from "../data"
import { IMatchedMedia } from "../types"

export const Slider: React.FC<IMatchedMedia> = ({ isMobile }) => {
  const [curr, setCurr] = useState(0)
  const handlePrev = () => {
    setCurr(curr === 0 ? data.length - 1 : curr - 1)
  }
  const handleNext = () => {
    setCurr(curr === data.length - 1 ? 0 : curr + 1)
  }

  return (
    <div className="slider-section">
      <div className="slider-wrapper">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${curr * 100}%)` }}>
          {data.map((slide) => (
            <img
              src={isMobile ? slide.mobile : slide.desktop}
              alt=""
              key={slide.id}
            />
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <div
          className="section-container"
          style={{ transform: `translateX(-${curr * 100}%)` }}>
          {data.map((slide) => (
            <div className="section" key={slide.id}>
              <h1 className="title">{slide.title}</h1>
              <span className="description">{slide.desc}</span>
              <button>
                SHOP NOW <img src="./images/icon-arrow.svg" alt="" />
              </button>
            </div>
          ))}
        </div>
        <div className="slider-controls">
          <img
            tabIndex={0}
            onClick={handlePrev}
            src="./images/icon-angle-left.svg"
            alt="a"
          />
          <img
            tabIndex={0}
            onClick={handleNext}
            src="./images/icon-angle-right.svg"
            alt="s"
          />
        </div>
      </div>
    </div>
  )
}
