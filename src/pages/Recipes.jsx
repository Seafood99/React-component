import React, { useEffect, useState } from 'react';
import RecipeCards from '../component/RecipeCards';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes') // URL endpoint untuk dummy data
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className='container'>
            <h1 className='text-2xl font-bold mb-4'>Recipes</h1>
            <div className='grid grid-cols-4 gap-4'>
                {recipes.map((recipe, index) => (
                    <RecipeCards        
                        key={index} 
                        title={recipe.title} 
                        description={recipe.description} 
                    />
                ))}
            </div>
        </div>
    );
}
