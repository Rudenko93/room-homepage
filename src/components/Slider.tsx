import { useState } from "react"

const data = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobile: "./images/mobile-image-hero-1.jpg",
    desktop: "./images/desktop-image-hero-1.jpg",
  },
  {
    id: 2,
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    mobile: "./images/mobile-image-hero-2.jpg",
    desktop: "./images/desktop-image-hero-2.jpg",
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobile: "./images/mobile-image-hero-3.jpg",
    desktop: "./images/desktop-image-hero-3.jpg",
  },
]

export const Slider = () => {
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
            <img src={slide.desktop} alt="" key={slide.id} />
          ))}
        </div>
      </div>
      <div className="section-wrapper">
        <div
          className="section-container"
          style={{ transform: `translateX(-${curr * 100}%)` }}>
          {data.map((slide) => (
            <div className="section">
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