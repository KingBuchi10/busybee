import CommentModal from '@/components/CommentModal'
import PostFeed from '@/components/PostFeed'
import Sidebar from '@/components/Sidebar'
import SignUpPrompt from '@/components/SignUpPrompt'
import Widgets from '@/components/Widgets'
import React from 'react'

function Home() {
  return (
    <>
      <div className='flex text-[#0F1419] min-h-screen max-w-[1400px] mx-auto bg-white justify-center'>
      <Sidebar/>
      <PostFeed/>
      <Widgets/>
    </div>
    <CommentModal/>
    <SignUpPrompt/>
    </>
  )
}

export default Home
