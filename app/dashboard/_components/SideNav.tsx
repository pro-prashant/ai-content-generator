"use client"
import {HomeIcon, Settings} from 'lucide-react'
import Image from 'next/image'
import UsageTrack from './UsageTrack'
import Link from 'next/link'


function SideNav() {

return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center'>
     <Image src={'/logo.svg'} alt='logo' height={100} width={120}/>
     </div>
     <hr className='my-6 border'/>
     <div className='my-3'>
      
              <Link href={'/dashboard'}>
          <div className='flex items-center ml-3 my-3 hover:bg-primary rounded-lg cursor-pointer gap-2 mb-2 p-3'>
          <HomeIcon/>
            <h2 className='ml-1'>Home</h2>
            </div>
            </Link>
             <Link href={'/dashboard/settings'}>
          <div className='flex items-center ml-3 my-3 hover:bg-primary rounded-lg cursor-pointer gap-2 mb-2 p-3'>
          <Settings/>
            <h2 className='ml-1'>Settings</h2>
            </div>
            </Link>
     </div>
     <div className='absolute bottom-10 left-0 w-full'>
      <UsageTrack/>
      </div>
    </div>
  )
}

export default SideNav
