import React from 'react';
import { featuredPostsInterface } from '../constant/interfaces';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FeaturedPostCard } from '.';
import { responsive } from '../constant/initialValues';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 70000, easing: (t: number) => t };

const FeaturedPosts = ({ featuredPosts }: { featuredPosts: featuredPostsInterface[] | [] }) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: true,
        // mode: "free",
        created(s) {
            s.moveToIdx(7, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 7, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 7, true, animation);
        },
        breakpoints: {
            '(min-width: 1024px) and (max-width: 3000px)': {
                slides: { origin: "center", perView: 4.5, spacing: 10 },
            },
            '(min-width: 464px) and (max-width: 1024px)': {
                slides: { origin: "center", perView: 3.5, spacing: 10 },
            },
            '(min-width: 0px) and (max-width: 464px)': {
                slides: { origin: "center", perView: 2.25, spacing: 10 },
            },
        },
        // range: {
        //     min: -5,
        //     max: 5,
        // },
    });

    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    // return (
    //     <div className="mb-8">
    //         <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
    //             {
    //                 featuredPosts.map((post, index) => (
    //                     <FeaturedPostCard key={index} post={post} />
    //                 ))
    //             }
    //         </Carousel>
    //     </div>
    // );

    return (
        <div ref={sliderRef} className="keen-slider mb-8">
            {
                [...featuredPosts, ...featuredPosts, ...featuredPosts, ...featuredPosts].map((post, index) => (
                    <FeaturedPostCard key={index} post={post} />
                ))
            }
        </div>
    );
};

export default FeaturedPosts;
