import React from 'react';

export default function RecipeCards({name, difficulty, order }) {
    return (
        <div className='border rounded-lg p-4'>
            <p className='text-lg font-bold'>{order}</p>
            <h2 className=' text-lg'>{name}</h2>
            <p>{difficulty}</p>
        </div>
    );
}
