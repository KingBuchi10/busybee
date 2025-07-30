"use client"
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button'
import Post from './Post'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { db } from '@/firebase'

interface PostInputProps {
    insideModal?: boolean;
}

function PostInput({insideModal}: PostInputProps) {
  const [text, setText] = useState("")
  const user = useSelector((state:RootState) => state.user)

  async function sendPost (){
    addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes:[],
      comments:[],

    })
    setText("")
  }
  return (
    <div className='flex gap-2 items-center border-b border-gray-200 pb-2 mt-19 '>
        <Image src={insideModal ? "/assets/profile.jpg" : "/Assets/bee.png"}
         width={60} height={60} alt='images' className='w-20 h-20 rounded-full'/>
        <div className='w-full'>
            <textarea className='resize-none outline-none w-full min-h-[50px] text-lg' placeholder={insideModal ? "Send a reply " : "What's happening?!"}
            onChange={(event) => setText(event.target.value)} value={text}
            />
            <div className='flex justify-between items-center pt-5 border-t border-gray-100'>
                <div className='flex gap-2'>
                    <PhotoIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                    <ChartBarIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                    <FaceSmileIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                    <CalendarIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                    <MapPinIcon className='w-[22px] h-[22px] text-[#F4AF01]'/>
                </div>
                <button className='xl:block bg-[#F4AF01] w-[80px] h-[36px] rounded-full text-sm text-white cursor-pointer mr-3 disabled:bg-amber-200 transition' onClick={sendPost} disabled={!text}>Bumble</button>
            </div>
        </div>
    </div>
  )
}

export default PostInput
