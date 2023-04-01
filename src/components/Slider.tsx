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
  const [state, setState] = useState(0)

  const handlePrev = () => {
    if (state === 0) {
      setState(data.length - 1)
    } else {
      setState((prev) => prev - 1)
    }
    console.log(data[state])
  }

  const handleNext = () => {
    if (state === data.length - 1) {
      setState(0)
    } else {
      setState((prev) => prev + 1)
    }
    console.log(data[state])
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={data[state].desktop} alt="" />
      </div>
      <div className="section">
        <h1 className="title">{data[state].title}</h1>
        <span className="description">{data[state].desc}</span>
        <button>
          SHOP NOW <img src="./images/icon-arrow.svg" alt="" />
        </button>
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
