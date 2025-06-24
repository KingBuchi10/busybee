"use client"
import { auth } from '@/firebase'
import { closeLoginModal, closeSignUpModal } from '@/redux/Slices/modalSlice'
import { signOutUser } from '@/redux/Slices/userSlice'
import { RootState } from '@/redux/store'
import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SideBarUserInfo() {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user)

    async function handleSignOut() {
        await signOut(auth)
        dispatch(signOutUser())
        dispatch(closeSignUpModal())
        dispatch(closeLoginModal())
    }
    return (
        <div className='flex absolute bottom-0 items-center justify-start gap-2 hover:bg-gray-500 hover:opacity-10 xl:p-3 xl:pe-3 transition cursor-pointer rounded-full w-fit xl:w-[240px]' onClick={() => handleSignOut()}>
            <div className='w-9 h-9 rounded-full overflow-hidden'><Image src="/Assets/bee.png" width={50} height={50} alt='pic' /></div>
            <div className='hidden xl:flex flex-col text-sm max-w-40'>
                <span className='font-bold whitespace-nowrap text-ellipsis overflow-hidden'>{user.name}</span>
                <span className='text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>{user.username}</span>
            </div>
        </div>
    )
}

export default SideBarUserInfo
