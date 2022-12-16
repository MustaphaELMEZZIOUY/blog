import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { grpahCMSImageLoader } from '../util';
import { postCardInterface } from '../constant/interfaces';
import { AiOutlineCalendar } from 'react-icons/ai';

interface postCardProps {
  post: postCardInterface
}

const PostCard = ({ post }: postCardProps) => {

  return <div className="bg-white shadow-lg rounded-md p-0 lg:p-8 pb-12 mb-8">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
    <Image
      // unoptimized
      // loader={grpahCMSImageLoader}
      alt={post.title}
      className="shadow-lg rounded-t-lg lg:rounded-lg"
      layout="fill"
      src={post.featuredImage.url}
    />
  </div> */}
    <div className="relative ">
      <div className="relative md:max-h-full md:h-80 h-52 w-full">
        {/* <img src={post?.featuredImage?.url || ''} alt="" className="object-top max-h-full h-80 w-full object-cover shadow-lg rounded-t-lg"/> */}
        <Image
          src={post?.featuredImage?.url || ''}
          alt=""
          className="object-top h-full w-full object-cover shadow-lg rounded-t-lg"
          width={950}
          height={480}
          // layout='fill'
        />
      </div>

      <div
        className='absolute w-full md:bottom-[-9%] bottom-[-12%] flex text-center items-center justify-center'
      >
        <div className="inline-block lg:m-auto flex text-center items-center justify-between bg-teal-500 md:p-3 p-2 text-gray-700 rounded-full md:text-lg text-xs">
          <div className="flex items-center justify-between md:mr-8 mr-1">
            <div
              className="h-8 w-8 rounded-full md:mr-2 mr-1"
            >
              <Image
                // unoptimized
                // loader={grpahCMSImageLoader}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
                src={post?.author?.photo?.url || '../public/bg.jpg'}
              />
            </div>
            <p className="inline align-middle">{post.author.name}</p>
          </div>
          <div className="font-medium">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg> */}
            <AiOutlineCalendar className="h-6 w-6 inline md:mr-2 mr-1 text-pink-500" />
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
      </div>
    </div>


    <h1 className="transition duration-700 text-center mt-16 mb-8 cursor-pointer hover:text-pink-600 md:text-3xl text-xl font-semibold">
      <Link href={`/post/${post.slug}`} >{post.title}</Link>
    </h1>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`} >
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-[#e6006f]  text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
};

export default PostCard;
