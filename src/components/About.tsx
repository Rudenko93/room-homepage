export const About: React.FC = (): JSX.Element => {
  return (
    <div className="about-container">
      <img src="./images/image-about-dark.jpg" alt="" />
      <div className="about">
        <h2 className="about-title">ABOUT OUR FURNITURE</h2>
        <span className="description">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </span>
      </div>
      <img src="./images/image-about-light.jpg" alt="" />
    </div>
  )
}
