import { useState } from "react"
import classNames from "classnames"
import { IMatchedMedia } from "../types"

export const Header: React.FC<IMatchedMedia> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={classNames("overlay", {
        open: isOpen,
      })}>
      <header
        className={classNames("menu", {
          mobile: isMobile,
          open: isOpen,
        })}>
        {isMobile && (
          <img
            className={classNames("menu-button", {
              open: isOpen,
            })}
            src={
              isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
            }
            onClick={() => setIsOpen((prev) => !prev)}></img>
        )}
        <img
          className={classNames("logo", { open: isMobile && isOpen })}
          src="./images/logo.svg"
          alt=""
        />
        <a href="">home</a>
        <a href="">shop</a>
        <a href="">about</a>
        <a href="">contact</a>
      </header>
    </div>
  )
}
