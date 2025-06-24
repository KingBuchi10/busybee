"use client"
import React from 'react'
import SignUpModals from './Modals/SignUpModals'
import LoginModal from './Modals/LoginModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

function SignUpPrompt() {
    const name = useSelector((state: RootState) => state.user.name)
    console.log(name)
    return (
        !name &&
        <div className='fixed w-full h-[80px] bg-[#F4AF01] bottom-0 items-center flex justify-center p-3 lg:justify-between lg:px-20 xl:px-40 2xl:px-80'>
            <div className='md:flex flex-col text-white hidden '>
                <span className='text-xl font-bold'>Don't miss out on the buzz</span> 
                <span>People who are on the Busy Bee are always the first to know.</span>   
            </div>
            <div className='flex gap-2 w-full md:w-fit'>
                    <LoginModal/>
                    <SignUpModals/>
            </div>
        </div>
    )
}

export default SignUpPrompt
