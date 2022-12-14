import React from 'react';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import moment from 'moment';
import Link from 'next/link';
import { postWidgetInterface } from '../constant/interfaces';

interface postCardWidgetProps {
  title: 'Related Posts' | 'Recent Posts';
  relatedPosts: postWidgetInterface[] | [];
}

const PostWidget = ({ title, relatedPosts }: postCardWidgetProps) => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-4 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{title}</h3>
      {relatedPosts?.map((post, index) => (
        <Link key={index} href={`/post/${post.slug}`}>
          <div className="flex items-center w-full mb-7 cursor-pointer">
            <div className="relative flex items-center w-16 min-w-[60px] max-w-[60px] min-h-[60px] max-h-[60px]">
              <Image
                // loader={grpahCMSImageLoader}
                alt={post.title}
                // height="60px"
                // width="60px"
                layout="fill"
                // unoptimized
                className="object-cover rounded-full"
                src={post.featuredImage.url}
              />
            </div>
            <div className="ml-4">
              <p className="text-gray-500">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
