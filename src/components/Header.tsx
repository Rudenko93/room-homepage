import { useRef, useState } from "react"
import classNames from "classnames"
import { useOutsideClick } from "../hooks/useOutsideClick"

interface IHeader {
  isMobile: boolean
}

export const Header: React.FC<IHeader> = ({ isMobile }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)
  const handle = (): void => {
    setIsOpen(false)
  }

  useOutsideClick(ref, handle, isOpen)

  const render = (): JSX.Element | null => {
    if (!isMobile) return null
    else {
      return (
        <img
          className={classNames("menu-button", {
            open: isOpen,
          })}
          src={
            isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
          }
          alt=""
          onClick={() => setIsOpen((prev) => !prev)}></img>
      )
    }
  }

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
        {render()}
        <img
          className={classNames("logo", { open: isMobile && isOpen })}
          src="./images/logo.svg"
          alt=""
        />
        <a href="/">home</a>
        <a href="/">shop</a>
        <a href="/">about</a>
        <a href="/">contact</a>
      </header>
    </div>
  )
}
