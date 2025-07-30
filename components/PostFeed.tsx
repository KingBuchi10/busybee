"use client"
import React, { useEffect, useState } from 'react'
import PostInput from './PostInput'
import Post from './Post'
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'

function PostFeed() {
  const [posts, setPosts] = useState< QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapShotDocs = snapshot.docs
      setPosts(snapShotDocs)
    })
    return unsubscribe
  },[])

  return (
    <div className='flex-grow max-w-2xl border-x border-gray-100'>
        <div className='px-3 py-4 text-lg sm:text-xl sticky top-0 z-50 bg-white opacity-80 backdrop-blur-sm font-bold border-gray-100'>
            Home
        </div>
        <PostInput/>
        {posts.map(post => <Post
        key={post.id}
        data={post.data()}
        id={post.id}
        />)}
    </div>
  )
}

export default PostFeed
