"use client"
import React from 'react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { Label } from './ui/label'

export default function Logincard() {
  return (
    <div className='flex h-screen items-center justify-center '>
        <Card className='w-[350px] p-3'>
        <ThemeToggle />
        {/* <form action="/api/auth/callback/credentials" method='POST'> */}
            <CardHeader className='text-center text-2xl'>Login</CardHeader>
            <Label htmlFor='username'>Email</Label>
            <Input placeholder='Username' id='username'></Input>
            <br />
            {/* <CardDescription className='p-2'>Please Input the email above</CardDescription> */}
            <Label htmlFor='password'>Password</Label>
            <Input className='mt-3'placeholder='Password' id='password'></Input>
            {/* <CardDescription className='p-2'>Please Input a password above</CardDescription> */}
            <Button className='mt-5 w-full p-3'>Login</Button>
        {/* </form> */}
        </Card>
    </div>
  )
}
