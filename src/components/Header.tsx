import { useRef, useState } from "react"
import classNames from "classnames"
import { useOutsideClick } from "../hooks/useOutsideClick"

export const Header: React.FC<Record<string, boolean>> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)
  const handle = () => {
    setIsOpen(false)
  }

  useOutsideClick(ref, handle, isOpen)

  return (
    <div
      className={classNames("overlay", {
        open: isMobile && isOpen,
      })}>
      <header
        ref={ref}
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
