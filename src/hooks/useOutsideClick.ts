import { useEffect } from "react"
import { useLatest } from "./useLatest"

export const useOutsideClick = (
  elementRef: React.MutableRefObject<HTMLElement | null>,
  handler: () => void,
  attached: boolean = true
) => {
  const latestHandler = useLatest(handler)

  useEffect(() => {
    if (!attached) return

    const handleClick = (e: Event) => {
      if (!elementRef.current) return
      if (!elementRef.current.contains(e.target as HTMLElement)) {
        latestHandler.current()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [elementRef, latestHandler, attached])
}
