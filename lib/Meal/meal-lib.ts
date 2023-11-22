import Meal, { MealResults } from "../../types/Meal/meal-type";
import { fetchAPI } from "../Common/api"
import { MEAL_QUERY, ALL_MEAL_QUERY } from "../../graphQl/Meal/meal-query";


export async function getAllMeals(preview: boolean): Promise<Meal[]> {
  const data = await fetchAPI(`${ALL_MEAL_QUERY}`);

  return extractPosts(data.data);
}

export async function getMealById(id: string): Promise<Meal> {

  const queryMeal = `{ 
    data: meal(id: "${id}")
    {
        ${MEAL_QUERY}
    }
  }`;

  const data = await fetchAPI(queryMeal);
  return data.data.data;
}

export async function getAllMealWithIds(): Promise<Meal[]> {
  const query = `{ 
    data: allMeal
    {
      __typename
      total
      results {
        ${MEAL_QUERY}
      }
    }
  }`;

  const data = await fetchAPI(query);
  return extractPosts(data.data);
}

function extractPosts({ data }: { data: MealResults }) {

  return data.results.map((post: Meal) => {
    return post;
  });
}

function extractPost({ data }: { data: Meal }) {
  return data;
}


