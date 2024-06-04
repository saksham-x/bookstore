import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Card from './Card';
const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free")
    // console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <h1 className='font-semibold text-xl pb-2'>
                    Free offered Courses
                </h1>
                <div>
                    <p>
                        Explore our vast library of free books, offering a wide range of genres and formats to suit every reader's taste. Enjoy unlimited access to timeless classics, modern bestsellers, and everything in between, all at no cost to you!
                    </p>
                </div>

                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Card item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook
