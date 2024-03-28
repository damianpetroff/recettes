'use server-only';

type Recipe = {
  meals: Array<{
    idMeal: string,
    strMeal: string,
    strTags: string,
    strMealThumb: string,
    strInstructions: string,
  }>
}

export const getRandomRecipe = async () : Promise<Recipe> => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  return response.json();
};