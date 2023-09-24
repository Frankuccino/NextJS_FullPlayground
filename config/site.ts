export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "SAMS",
  description:
    "St. Paul University Asset Management System",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Register",
      href: "/register",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
  },
  
}
