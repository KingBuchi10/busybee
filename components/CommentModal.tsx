"use client"
import { closeCommentModal } from '@/redux/Slices/modalSlice'
import { RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostHeader from './Post'
import PostInput from './PostInput'

function CommentModal() {
    const open = useSelector((state: RootState) => state.modals.commentModalOpen)
    const dispatch = useDispatch()
  return (
    <>
        <Modal
        open={open}
        onClose={() => dispatch(closeCommentModal())}
        className='flex justify-center items-center'
        >
            <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl outline-none'>
              <div className='pt-5 pb-10 sm:px-5 flex flex-col'>
                <PostHeader 
                name="Guest"
                username="guest1234"
                text="Hello"
                />
                <PostInput/>
              </div>
            </div>
        </Modal> 
    </>
  )
}

export default CommentModal
