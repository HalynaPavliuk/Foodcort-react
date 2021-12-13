
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getMealById} from '../api';
import Preloader from '../components/Preloader';


function Recipe(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    


    useEffect(() => {
       getMealById(id). then(data => setRecipe(data.meals[0]))
    }, [id])



        return <>
       
        {!recipe.idMeal ? <Preloader /> : (
            <div className="recipe">
              <div className="desc">
                <img src={recipe.strMealThumb} />
                <div className="textinfo">
                    <h3>{recipe.strMeal}</h3>
                    {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
                    <h6>{recipe.strCategory}</h6>
                    <p>{recipe.strInstructions}</p>
               </div>
              </div>

              <table className="centered">
                <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </tr>
                </thead>

                <tbody>
                {
                    Object.keys(recipe).map((key) => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{
                                        recipe[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                            ) 
                    
                        }
                    })
                }
                </tbody>
            </table>

                {recipe.strYoutube ? (
                    <div className="row">
                        <h5>Video recipe</h5>
                        <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}  />
                    </div>
                ) : null}

            </div>
        )}
    </>

}

export default Recipe;