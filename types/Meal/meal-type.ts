import {MediaResults} from "../Common/media-type" 
import { JSONContent } from "@tiptap/core";

type Meal = {
    Title: string
    id: string
    Name: string
    Ingredients: string
    Duration: string
    Description: string
    preparationDescriptionRt: JSONContent
    ImageList: MediaResults
  }
export default Meal

export type MealResults = {
  total: string;
  results: Meal[];
}