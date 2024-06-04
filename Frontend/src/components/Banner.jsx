import React from 'react'
import banner from '/banner.png'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className="space-y-12">
                        <h1 className='text-4xl font-serif font-bold'>
                            Embrace the journey of continuous<span className='text-pink-600'>  growth and discovery.</span>
                        </h1>
                        <p className='text-justify'>Discover a world of knowledge and adventure at our book website. Whether you're searching for the latest bestsellers, timeless classics, or niche genres, our extensive collection has something for every reader. Enjoy personalized recommendations, detailed reviews, and an easy-to-navigate interface that makes finding your next great read a breeze. Dive into the joy of reading with us, where every book opens a door to new possibilities.</p>


                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <div><button className="btn btn-accent mt-6 mb-3">Register</button></div>
                </div>
                <div className='w-full md:w-1/2 order-1'>
                    <img src={banner} className='h-108 w-108 md:mt-20 md:ml-20' alt="Banner Image" />
                </div>
            </div>
        </>
    )
}

export default Banner
