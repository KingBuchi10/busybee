"use client"
import { closeCommentModal } from '@/redux/Slices/modalSlice'
import { RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostHeader from '../Post'
import PostInput from '../PostInput'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { DocumentData } from 'firebase/firestore'

interface PostProps {
    data: DocumentData
}
function CommentModal({ data }: PostProps) {
    const open = useSelector((state: RootState) => state.modals.commentModalOpen)
    const commentPostDetails = useSelector((state: RootState) => state.modals.commentPostDetails)
    const dispatch = useDispatch()
    return (
        <>
            <Modal
                open={open}
                onClose={() => dispatch(closeCommentModal())}
                className='flex items-center justify-center '>

                <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl outline:none p-5 flex flex-col gap-5 relative'>
                    <XMarkIcon className='w-7 mt-1 ms-1 cursor-pointer text-black' onClick={() => dispatch(closeCommentModal())} />
                    <div className='pt-5 pb-10 px-0 sm:px-f flex flex-col'>
                        <div className='flex items-center '>
                            <Image src="/Assets/bee.png" width={44} height={44} alt='profile' className='w-20 h-20 z-10' />
                            <div className='flex flex-col ms-3 gap-6'>
                                <div className='gap-2 text-[#707E89] flex '>
                                    <span className='font-bold text-[#0F1419] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]'>{commentPostDetails.name}</span>
                                    <span className='whitespace-nowrap overflow-hidden text-ellipsis inline-block '>{commentPostDetails.username}</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div>
                                        <span className='text-black'>{commentPostDetails.text}</span>
                                    </div>
                                    <div className=''>
                                        <span className='text-[15px] text-[#707E89]'>
                                            Replying to <span className='text-[#F4AF01]'>{commentPostDetails.name}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <PostInput
                            insideModal={true}
                        />
                    </div>
                    <div className='w-0.5 h-32 bg-gray-300 absolute sm:left-[58px] left-[33px] top-40 z-0'></div>
                </div>
            </Modal>
        </>
    )
}

export default CommentModal
