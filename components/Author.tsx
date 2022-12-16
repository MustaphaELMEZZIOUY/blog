import React from 'react';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import { authorInterface } from '../constant/interfaces';

const Author = ({ author }: { author: authorInterface }) => (
    <div className="text-center text-sm md:text-lg text-slate-50 mt-20 mb-8 px-8 pt-12 pb-8 lg:p-12 relative rounded-lg bg-teal-900">
        <div className="absolute left-0 right-0 -top-10">
                <Image
                    // unoptimized
                    // loader={grpahCMSImageLoader}
                    alt={author.name}
                    height={80}
                    width={80}
                    className="inline-block min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] object-cover rounded-full"
                    src={author.photo.url}
                />
            </div>
        <h3 className="mt-4 mb-4 font-bold">{author.name}</h3>
        <p className="">{author.bio} Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim nesciunt ipsam illum temporibus quaerat? Deleniti voluptatum, esse, beatae sed distinctio, eos ab soluta neque rerum inventore debitis nemo quaerat.</p>
    </div>
)

export default Author;
