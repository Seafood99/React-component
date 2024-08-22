import React from 'react';

import ReactImg from "../assets/react.svg";

export default function PriceCard({ 
    price='0', 
    title='default', 
    description='default', 
    points=['default1, default2']
 }) {
    return (
        <div className='border rounded-lg p-3'>
            <p className='text-sm text-gray-500'>
                <span className='font-bold text-xl text-green-600'>${price}</span>
                /month
            </p>
            <h3 className='font-bold text-xl text-green-600 pt-3'>{title}</h3>
            <h4 className='font text-sm text-gray-500'>
                {description}
            </h4>

            <ul className='pt-3'>
                {points && points.length > 0 ? (
                    points.map((point, index) => (
                        <li className='flex gap-3 items-center' key={index}>
                            <img src={ReactImg} alt='React' className='size-5 w-4 h-4 inline-block ' />
                            {point}
                        </li>
                    ))
                ) : (
                    <li>No points available</li>
                )}
            </ul>
        </div>
    );
}
