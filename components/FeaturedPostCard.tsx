import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { featuredPostsInterface } from '../constant/interfaces';

const FeaturedPostCard = ({ post }: { post: featuredPostsInterface }) => (
  <div className="keen-slider__slide relative h-72">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <Image
          // unoptimized
          alt={`${post.author.name} ${post.title} `}
          // height="30px"
          // width="30px"
          layout='fill'
          className="object-cover"
          src={post.featuredImage.url}
        />
      </div>
    </div>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-sm md:text-2xl text-center">
        {post.title}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <div
          className="max-h-[30px] min-h-[30px] max-w-[30px] min-w-[30px]"
        >
          <Image
            // unoptimized
            alt={post.author.name}
            width={80}
            height={80}
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
        </div>

        <p className="inline align-middle text-white text-shadow ml-2 font-medium text-sm md:text-base">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`} ><span className="cursor-pointer absolute w-full h-full" /></Link>
  </div>
);

export default FeaturedPostCard;
