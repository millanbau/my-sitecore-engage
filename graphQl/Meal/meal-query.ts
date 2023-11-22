import MEDIA_QUERY from "../Common/media-query";

export const MEAL_QUERY = ` 
  id
  Title: mealTitle
  Name: name
  Ingredients: ingredients
  Duration: minutesToPrepare
  Description: preparationDescription
  preparationDescriptionRt
  ImageList: image{
    total
    results{
      ${MEDIA_QUERY}
    }
  }
`;

export const ALL_MEAL_QUERY = `{ 
    data: allMeal
    {
      __typename
      total
      results {
        ${MEAL_QUERY}
      }
    }
  }
  `;

export default ALL_MEAL_QUERY

