import { useEffect, useState } from "react";
import RecipeCards from "../component/RecipeCards";


export default function RecipesNeu() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    function getRecipes() {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div className="container grid grid-cols-4 gap-3">
            
            {
                loading
                ? (
                        <div className="flex gap-3 absolute h-screen items-center justify-center w-full left-0">
                            <div className="size-10 bg-red-200 rounded-full border-x-2 border-black animate-spin"> 
                            </div>
                                <p>loading</p>
                        </div>
                )


                :recipes.map(
                    (recipe, index) => (
                        <RecipeCards
                            key={recipe.id}
                            name={recipe.name}
                            difficulty={recipe.difficulty}
                            order={index + 1}
                        />
                    )
                )
            }
        </div>
    );
}

