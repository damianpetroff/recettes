import Image from "next/image";
import { getRandomRecipe } from "./_actions/getRandomRecipe";

export default async function Home() {

  const recipe = await getRandomRecipe();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col items-center justify-between lg:w-1/3 gap-4">
          <div className="w-40 h-40 relative">
            <Image
              src={recipe.meals[0].strMealThumb}
              alt={recipe.meals[0].strMeal}
              width={400}
              height={400}
            />
          </div>
          <h1 className="text-2xl font-bold text-balance text-center">{recipe.meals[0].strMeal}</h1>
          <p className="text-xs">{recipe.meals[0].strTags}</p>
        </div>
        
        <div className="flex flex-col items-center justify-between lg:w-2/3">
          <h2 className="text-xl font-bold">Instructions</h2>
          <p className="text-xs text-justify text-balance">{recipe.meals[0].strInstructions}</p>
        </div>
      </div>
    </main>
  );
}
