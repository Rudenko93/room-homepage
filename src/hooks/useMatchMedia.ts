import { useState, useLayoutEffect, useCallback } from "react"

const queries: Array<string> = ["(max-width: 576px)"]

export const useMatchMedia = (): Record<string, boolean> => {
  const mediaQueryLists = queries.map((query) => matchMedia(query))

  const getValues = useCallback(
    () => mediaQueryLists.map((list) => list.matches),
    [mediaQueryLists]
  )

  const [values, setValues] = useState<boolean[]>(getValues)

  useLayoutEffect(() => {
    const handler = (): void => setValues(getValues)

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler))
    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      )
  }, [getValues, mediaQueryLists])

  return ["isMobile", "isTablet"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  )
}
