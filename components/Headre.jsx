import React from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

const Headre = () => {
  return (
    <div className='flex items-center justify-around p-4 shadow-md'>
      <div>
        LOGO
      </div>
      <div className='list-none flex items-center gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
      </div>
    </div>
  )
}

export default Headre
