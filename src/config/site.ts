import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://anishsarkar.site",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@anishsarkars"
export const GITHUB_USERNAME = "anishsarkars"
export const SOURCE_CODE_GITHUB_REPO = "anishsarkars/portfolio-anish"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/anishsarkars/portfolio-anish"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "anishsarkar.site",
}
