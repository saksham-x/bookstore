import React from 'react'

function Card({ item }) {
    console.log(item)
    return (
        <>
            <div className='mt-4 my-3 p-4 cursor-pointer'>
                <div className="card w-96 bg-base-100 shadow-xl mb-10 mr-4 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline ">${item.category}</div>
                            <div className="p-3 badge  border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-300 cursor-pointer ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
