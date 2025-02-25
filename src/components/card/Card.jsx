import React from 'react'
import Img from '../../assets/anujpandey.jpg'

export default function Card() {
    return (
        <>
            <div className='mt-5'>
                <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start'>
                    <div className='max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg bg-white rounded-xl overflow-hidden'>
                        <img className="w-full h-auto" src={Img} alt="Anuj Pandey" />
                    </div>
                    <div className='p-6 sm:p-8 lg:p-10 sm:ml-6'>
                        <div className='text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500'>Title</div>
                        <div className='mt-3 text-sm sm:text-base lg:text-lg text-gray-500'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esciunt deleniti corporis, quae nostrum quaerat molestias magnam voluptate nihil dolorem ipsum!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
