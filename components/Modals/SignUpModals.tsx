"use client"
import React, { useEffect, useState } from 'react'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { closeSignUpModal, openSignUpModal } from '@/redux/Slices/modalSlice'
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { auth } from '@/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInUser } from '@/redux/Slices/userSlice'

function SignUpModals() {
    const [name, setName] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleShow = () => {
        setShowPassword(!showPassword)
    }

    const isOpen = useSelector((state: RootState) =>
        state.modals.signUpModalOpen
    )
    const dispatch: AppDispatch = useDispatch()

    async function handleSignUp() {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);


        await updateProfile(userCredential.user, {
            displayName: name
        })
        dispatch(signInUser({
            name: userCredential.user.displayName,
            username: userCredential.user.email,
            email: userCredential.user.email,
            uid: userCredential.user.uid
        }))
    }

    async function handleGuest(){
            await signInWithEmailAndPassword(auth, "guest12345@gmail.com", "12345678")
        }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) return
            //Handle redux
            dispatch(signInUser(
                {
                    name: currentUser.displayName,
                    username: currentUser.email,
                    email: currentUser.email,
                    uid: currentUser.uid
                }
            ))
        })
        return unsubscribe
    }, [])


    return (
        <>
            <button className='w-full h-[48px] md:w-[88px] md:h-[40px] font-bold text-md md:text-sm rounded-full bg-white text-black ' onClick={() => dispatch(openSignUpModal())} >
                Sign Up
            </button>

            <Modal open={isOpen} onClose={() => dispatch(closeSignUpModal())} className='flex justify-center items-center'>
                <div className='w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white'>
                    <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer text-black' onClick={() => dispatch(closeSignUpModal())} />
                    <div className='pt-10 pb-20 px-4 sm:px-20'>
                        <h1 className='text-3xl font-bold mb-10 text-black'>Create your account</h1>
                        <div className='w-full space-y-5 mb-10'>
                            <input type="text"
                                className='w-full h-[54px] border-1 border-gray-200 outline-none ps-3 rounded-[4px] text-black focus:border-[#F4AF01] transition'
                                placeholder='Name'
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />
                            <input type="email"
                                className='w-full h-[54px] border-1 border-gray-200 outline-none ps-3 rounded-[4px] text-black focus:border-[#F4AF01] transition'
                                placeholder='Email'
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                            <div className='flex items-center pe-3 w-full h-[54px] border-1 border-gray-200 outline-none rounded-[4px] text-black focus-within:border-[#F4AF01] transition overflow-hidden'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className='w-full h-full ps-3'
                                    placeholder='password'
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                />
                                <div className='w-7 h-7 text-gray-400 cursor-pointer' onClick={handleShow}>
                                    {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                </div>
                            </div>
                            <button className='bg-[#F4AF01] text-white h-[48px] rounded-full shadow-lg mb-5 w-full' onClick={() => handleSignUp()}>
                                Sign Up
                            </button>
                            <span className='mb-5 text-sm text-center block text-black'>Or</span>
                            <button className='bg-[#F4AF01] text-white h-[48px] rounded-full shadow-lg w-full' onClick={handleGuest}>
                                Login as guest
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default SignUpModals


