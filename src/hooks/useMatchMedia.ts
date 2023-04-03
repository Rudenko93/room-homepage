import { useState, useLayoutEffect } from "react"

export type IQuery = Array<string>
export type IMatchedMedia = Record<string, boolean>

const queries: IQuery = ["(max-width: 576px)"]

export const useMatchMedia = (): IMatchedMedia => {
  const mediaQueryLists = queries.map((query) => matchMedia(query))

  const getValues = () => mediaQueryLists.map((list) => list.matches)

  const [values, setValues] = useState(getValues)

  useLayoutEffect(() => {
    const handler = () => setValues(getValues)

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler))
    console.log("LayoutEffect")
    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      )
  }, [])

  return ["isMobile", "isTablet"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  )
}