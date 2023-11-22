import { MediaResults } from "../Common/media-type"
import { MealResults } from "../Meal/meal-type"
import { FooterResults } from "./footer-type"
import { HeaderResults } from "./header-type"


type Homepage = {
    id: string
    name: string
    header: HeaderResults
    heroBanner : MediaResults
    mealTitle: string
    mealSectionText: string
    meals: MealResults
    footer: FooterResults
  }
export default Homepage

export type HomepageResults = {
  total: string;
  results: Homepage[];
}