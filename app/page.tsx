import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Login from "./(users)/login/page"
import Sidebar from "@/components/Sidebar"

// NextAuth Configs 
import { options } from './api/auth/[...nextauth]/options' 
import { getServerSession } from "next-auth/next"

export default async function IndexPage() {
  const session = await getServerSession(options)
// So basicallly we await the server session and pass in the options

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      
      <div className="flex flex-col items-center gap-2">
        
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          This is the home page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
         SHAAAAAAAAAAMS
        </p>
      </div>
      <Link href='api/auth/signout'>
        <Button>
        Signout baby
        </Button>
        </Link>
      <div className="flex gap-4">
      </div>
    </section>


// Tomorrow I'll work on creating a new setup to make a clean development environment for SAMS project and implement sidebar
  )
}
