import stylesHp from '../../styles/Homepage/Homepage.module.css'
import {MealResults} from "../../types/Meal/meal-type";
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    allMeals: MealResults;
}
const MealTeaserComponent = ({allMeals}:Props) => {
    const meals = allMeals.results;
    
    return(
        <div>
            {meals.map((meal: any) => (
                <div key={meal.id} className={stylesHp.boxOuter}>
                    <div className={stylesHp.box}>
                        <Image 
                            alt=''
                            src={meal.ImageList.results[0].fileUrl}
                            width='500'
                            height= '500'
                            className={stylesHp.boxImage}
                        />
                        <h2>{meal.Title}</h2>
                        <p className={stylesHp.boxText}>
                            {meal.Description}
                        </p>
                        <p>
                            <button className={stylesHp.button}>
                            <Link href={`/meals/${encodeURIComponent(meal.id)}`}>Read more</Link>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MealTeaserComponent