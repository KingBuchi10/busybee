import { openCommentModal, setCommentPostDetails } from '@/redux/Slices/modalSlice'
import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { DocumentData, Timestamp } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'

interface PostProps {
    data: DocumentData
    id: string
}
function Post({ data }: PostProps) {
    function PostHeader({ username, name, timestamp, text }: PostHeaderProp) {
        const dispatch = useDispatch()
        return (
            <div className='flex p-3 gap-5  w-full'>
                <Image src="/Assets/bee.png" width={44} height={44} alt='profile' className='w-11 h-11' />
                <div className='text-[15px] flex flex-col gap-2 w-full'>
                    <div className='flex gap-2 text-[#707E89] '>
                        <span className='font-bold text-[#0F1419] whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]'>{name}</span>
                        <span className='whitespace-nowrap overflow-hidden text-ellipsis inline-block '>@{username}</span>
                        <span> . </span>
                        {timestamp && <Moment fromNow>
                            {timestamp.toDate()}
                        </Moment>}

                    </div>
                    <div >{text}</div>






                    <div className='flex justify-between'>
                        <button className='flex' onClick={() => {
                            dispatch(setCommentPostDetails({
                                name: data.name,
                                username: data.username,
                                id: data.id,
                                text: data.text
                            }))
                            dispatch(openCommentModal())}}>
                            <div>
                                <ChatBubbleOvalLeftEllipsisIcon className='w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition' />
                            </div>
                            <div>
                                <span>2</span>
                            </div>
                        </button>
                        <div className='flex'>
                            <div>
                                <HeartIcon className='w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition' />
                            </div>
                            <div>
                                <span>22</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <ChartBarIcon className='w-[22px] h-[22px] transition cursor-not-allowed' />
                            </div>
                            <div>
                                <span>22</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>
                                <ArrowUpTrayIcon className='w-[22px] h-[22px] transition cursor-not-allowed' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='border-b border-gray-200'>
            <PostHeader
                username={data.username}
                name={data.name}
                timestamp={data.timestamp}
                text={data.text}
            />
        </div>
    )
}

interface PostHeaderProp {
    username: string;
    name: string;
    timestamp?: Timestamp;
    text: string
}

export default Post


