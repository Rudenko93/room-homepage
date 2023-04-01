function App() {
  return (
    <div className="app">
      <header className="menu">
        <img src="./images/logo.svg" alt="" />
        <a href="">home</a>
        <a href="">shop</a>
        <a href="">about</a>
        <a href="">contact</a>
      </header>
      <div className="slider-container">
        <div className="slider">
          <img src="./images/desktop-image-hero-1.jpg" alt="" />
        </div>
        <div className="section">
          <h1 className="title">Discover innovative ways to decorate</h1>
          <span className="description">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </span>
          <button>
            SHOP NOW <img src="./images/icon-arrow.svg" alt="" />
          </button>
          <div className="slider-controls">
            <img src="./images/icon-angle-left.svg" alt="a" />
            <img src="./images/icon-angle-right.svg" alt="s" />
          </div>
        </div>
      </div>
      <div className="about-container">
        <img src="./images/image-about-dark.jpg" alt="" />
        <div className="about">
          <h2 className="about-title">ABOUT OUR FURNITURE</h2>
          <span className="description">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </span>
        </div>
        <img src="./images/image-about-light.jpg" alt="" />
      </div>
    </div>
  )
}

export default App
