import MEDIA_QUERY from "../Common/media-query";
import { MEAL_QUERY } from "../Meal/meal-query";
import { FOOTER_QUERY } from "./footer-query";
import MENU_QUERY from "./menu-query";

export const HOMEPAGE_QUERY = ` 
  id
  name
  heroBanner {
    results{
      ${MEDIA_QUERY}
    }
  }
  header {
    total
    results {
      __typename
      ... on Header {
        id
        name
        logo {
          total
          results {
            ${MEDIA_QUERY}
          }
        }
        menuItems {
          total
          results {
            __typename
            ... on Menu {
             ${MENU_QUERY}
            }
          }
        }
      }
    }
  }
  mealTitle
  mealSectionText
  meals {
    total
    results {
      __typename
      ... on Meal {
        ${MEAL_QUERY}
      }
    }
    
  }
  footer {
    total
    results {
      __typename
      ... on Footer {
        ${FOOTER_QUERY}
      } 
    }
  }
`;

export const ALL_HOMEPAGE_QUERY = `{ 
  data: allHomepage {
    results{
      ${HOMEPAGE_QUERY}
    }
  }
}
`;

export default ALL_HOMEPAGE_QUERY


