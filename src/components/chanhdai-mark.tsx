"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ChanhDaiMark(props: React.ComponentProps<"div">) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div {...props} className={props.className} />
  }

  const logoSrc = resolvedTheme === "dark" ? "/logo-dark-mode.png" : "/logo-light-mode.png"

  return (
    <div {...props} className={props.className}>
      <img
        src={logoSrc}
        alt="Logo"
        className="h-full w-auto"
      />
    </div>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`
}
