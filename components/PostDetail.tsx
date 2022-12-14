import React from 'react';
import { postDetailsInterface } from '../constant/interfaces';
import moment from 'moment';
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import { AiOutlineCalendar } from 'react-icons/ai';
import Link from 'next/link';

const PostDetail = ({ post }: { post: postDetailsInterface }) => {
    const getContentFragment = (index: number, text: any, obj: any, type?: any) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }

            if (obj.href) {
                return obj.openInNewTab ? (
                    <a
                        href={obj.href}
                        rel="noopener noreferrer"
                        target='_blank'
                        className="underline text-cyan-500"
                    >
                        {
                            obj?.children?.map((item: any, itemIndex: number) => getContentFragment(itemIndex, item.text, item))
                        }
                    </a>
                ) : (
                    <Link
                        href={obj.href}
                        passHref
                    >
                        {/* <a
                            className="underline text-cyan-500"
                        > */}
                            {
                                obj?.children?.map((item: any, itemIndex: number) => getContentFragment(itemIndex, item.text, item))
                            }
                        {/* </a> */}
                    </Link>
                )
            }
        }

        switch (type) {
            case 'heading-one':
                return <h1 key={index} className="text-3xl font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h1>;

            case 'heading-two':
                return <h2 key={index} className="text-2xl font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h2>;

            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h3>;

            case 'heading-four':
                return <h4 key={index} className="text-lg font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h4>;

            case 'heading-five':
                return <h5 key={index} className="text-md font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h5>;

            case 'heading-six':
                return <h6 key={index} className="text-sm font-semibold mb-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </h6>;


            case 'paragraph':
                return <p key={index} className="mb-4 mt-4">
                    {
                        modifiedText.map((item: any, i: number) => <React.Fragment key={i}>{item}</React.Fragment>)
                    }
                </p>;

            case 'image':
                return (
                    <div className='text-center' key={index}>
                        <Image
                            // unoptimized
                            // loader={grpahCMSImageLoader}
                            alt={obj.title}
                            height={obj.height}
                            width={obj.width}
                            src={obj.src}
                        />
                    </div>
                );

            case 'bulleted-list':
                return (
                    <ul key={index} className='list-square'>
                        {
                            obj?.children?.map((listItem: any, listItemIndex: number) => getContentFragment(listItemIndex, listItem?.text, listItem, listItem?.type))
                        }
                    </ul>
                );

            case 'numbered-list':
                return (
                    <ol key={index} className='list-decimal'>
                        {
                            obj?.children?.map((listItem: any, listItemIndex: number) => getContentFragment(listItemIndex, listItem?.text, listItem, listItem?.type))
                        }
                    </ol>
                )

            case 'list-item':
                return obj?.children?.map((listItem: any, listItemIndex: number) => getContentFragment(listItemIndex, listItem?.text, listItem, listItem?.type))

            case 'list-item-child':
                return (
                    <li key={index}>
                        {/* Hello */}
                        {
                            obj?.children?.map((listItem: any, listItemIndex: number) => getContentFragment(listItemIndex, listItem?.text, listItem, listItem?.type))
                        }
                    </li>
                )

            default:
                return modifiedText;
        }
    };

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
                <div className="relative overflow-hidden shadow-md mb-6 md:max-h-full md:h-[500px] h-[250px] w-full">
                    {/* <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" /> */}
                    {/* <img src={post?.featuredImage?.url || ''} alt="" className="object-top max-h-full h-80 w-full object-cover shadow-lg rounded-t-lg"/> */}
                    <Image
                        src={post?.featuredImage?.url || ''}
                        alt=""
                        className="object-top h-80 object-cover shadow-lg rounded-t-lg"
                        // width={900}
                        // height={600}
                        layout='fill'
                    />
                </div>
                <div className="px-4 lg:px-0">
                    <div className="flex flex-col md:flex-row justify-start md:items-center md:mb-8 mb-5  w-full">
                        <div className="flex items-center lg:w-auto mr-8 my-1">
                            {/* <div
                                className="h-7 w-7 rounded-full"
                            >
                                <Image
                                    // unoptimized
                                    // loader={grpahCMSImageLoader}
                                    alt={post.author.name}
                                    height={80}
                                    width={80}
                                    className="align-middle rounded-full"
                                    src={post.author.photo.url}
                                />
                            </div> */}
                            <div className="min-h-[35px] min-w-[35px] max-h-[35px] max-w-[35px]">
                                <Image
                                    // unoptimized
                                    // loader={grpahCMSImageLoader}
                                    alt={post.author.name}
                                    height={80}
                                    width={80}
                                    className="align-middle rounded-full"
                                    src={post.author.photo.url}
                                />
                            </div>
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                        </div>
                        <div className="flex items-center font-medium text-gray-700 my-1">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg> */}
                            <AiOutlineCalendar className="inline-block h-7 w-7 md:mr-2 mr-1 text-pink-500" />
                            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                        </div>
                    </div>

                    <h1 className="md:mb-8 mb-5 text-3xl font-semibold">{post.title}</h1>
                    {post?.content?.raw?.children?.map((typeObj: any, index: number) => {
                        const children = typeObj?.children?.map((item: any, itemIndex: number) => getContentFragment(itemIndex, item?.text, item));

                        return getContentFragment(index, children, typeObj, typeObj.type);
                    })}
                </div>
            </div>
        </>
    )
};

export default PostDetail;
