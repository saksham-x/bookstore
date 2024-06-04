import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import { Link } from "react-router-dom";

const Course = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='mt-28 text-center items-center justify-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here ! :)</span></h1>
                    <p className='mt-12 text-justify '>
                        Dive into a treasure trove of stories, knowledge, and adventure. Whether you're a lifelong book lover or just discovering the joys of reading, our carefully curated selection of bestsellers, classics, and hidden gems has something for everyone. From gripping fiction and inspiring biographies to educational non-fiction and enchanting children's books, our bookstore is your ultimate destination for literary delights. Join our community of passionate readers, enjoy personalized recommendations, and explore the endless possibilities that books have to offer. Visit us today and find your next great read. Our bookstore – where every book is a new adventure waiting to be discovered!
                    </p>
                    <Link to={'/'}>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 duration-300 mt-4'>Back</button>
                    </Link>

                </div>
                <div className='mt-12 flex flex-wrap'>
                    {list.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

            </div>


        </>
    )
}

export default Course
