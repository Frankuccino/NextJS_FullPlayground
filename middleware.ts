// Without a defined matcher, this one line applies next-auth to the entire project
export { default } from 'next-auth/middleware'


// https://next-auth.js.org/configuration/nextjs#middleware
export const config = { matcher: ["/"]}