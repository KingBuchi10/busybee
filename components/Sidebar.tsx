import React from 'react'
import { HomeIcon , HashtagIcon, BellIcon, InboxIcon , UserIcon , EllipsisHorizontalCircleIcon, BookmarkIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { useDispatch } from 'react-redux'
import SideBarUserInfo from './SideBarUserInfo'

function Sidebar() {
  return (
    <nav className='hidden sm:flex flex-col sticky top-0 h-screen xl:ml-20 p-3 xl:mr-10'>
      <div className='relative h-full flex flex-col items-center'>
        <div>
        <Image src="/Assets/bee.png" width={48} height={48} alt='images'/>
      </div>
        <ul className='pl-3.5 '>
                <SidebarLink Icon={HomeIcon} text="Home"/>
                <SidebarLink Icon={HashtagIcon} text="Explore"/>
                <SidebarLink Icon={BellIcon} text="Notifications"/>
                <SidebarLink Icon={InboxIcon} text="Messages"/>
                <SidebarLink Icon={BookmarkIcon} text="Bookmarks"/>
                <SidebarLink Icon={UserIcon} text="Profile"/>
                <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More"/>
                <button className='hidden xl:block bg-[#F4AF01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-lg mt-2'>Bumble</button>
        </ul>
        <SideBarUserInfo/>
      </div>
    </nav>
  )
}

interface SidebarLinkProps {
  text:string
  Icon:React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>
}

function SidebarLink({text, Icon}: SidebarLinkProps){
return(
    <li className='flex items-center gap-2 text-xl mb-6'>
        <Icon height={20}/>
        <span className='hidden xl:block text-black'>
          {text}
        </span>
    </li>
)
}
export default Sidebar
