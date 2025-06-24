import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col gap-5 p-3 w-[400px]'>
      <div className='flex bg-[#EFF3F4] text-[#89959D] items-center h-[44px] rounded-full pl-5 gap-3'>
        <MagnifyingGlassIcon className='w-[20px] h-[20px]' />
        <input type='text' placeholder='Search busy bee' className='bg-transparent outline-none' />
      </div>

      <div className='flex flex-col bg-[#EFF3F4] rounded-xl'>
        <h1 className='text-xl font-bold p-3'>What's Happening?</h1>

        <div className='p-3 flex flex-col gap-3'>
          <div className='flex flex-col '>
            <div className='flex items-center justify-between text-[#536471] text-[13px]'>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[20px] h-[20px]' />
            </div>
            <span className='font-bold text-sm text-black'>#ReactJS</span>
            <span>240k Bumbles</span>
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center justify-between text-[#536471] text-[13px]'>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[20px] h-[20px]' />
            </div>
            <span className='font-bold text-sm text-black'>#ReactJS</span>
            <span>240k Bumbles</span>
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center justify-between text-[#536471] text-[13px]'>
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className='w-[20px] h-[20px]' />
            </div>
            <span className='font-bold text-sm text-black'>#ReactJS</span>
            <span>240k Bumbles</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-[#EFF3F4] p-3  rounded-xl'>
        <h1 className='text-xl font-bold'>Who to follow?</h1>

        <div className='flex justify-between items-center py-3'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full overflow-hidden'><Image src="/Assets/bee.png" width={40} height={40} alt='pro' /></div>
            <div className='flex flex-col text-sm'>
              <span className='font-bold'>ghgfdhg</span>
              <span>gfgsfh</span>
            </div>
          </div>

          <button className='bg-[#0F1419] text-white rounded-full text-sm w-[72px] h-[40px]'>Follow</button>

        </div>
      </div>
    </div>
  )
}

export default Widgets
