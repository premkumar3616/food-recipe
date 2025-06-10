import React ,{useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../../context';
import './Details.css'



function Details() {
const {id} =useParams();
const {recipedetails, setRecipeDetails, AddtoMyFav,favlist} = useContext(RecipeContext);

useEffect(() => {
  async function fetchRecipeDetails() {
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json();
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  }
  fetchRecipeDetails();
  // Cleanup function to reset recipe details when component unmounts
},[])
// console.log(recipedetails, "recipedetails");

  return (
    <div className='details'>
      <div className="details-contents">
        <img className="details-image" src={recipedetails?.recipe.image_url} alt={recipedetails?.recipe.title} />
        <div className="details-content">
          <span className="details-publisher">{recipedetails?.recipe.publisher}</span>
          <h3 className="details-title">{recipedetails?.recipe.title}</h3>
          <button className='favbtn' onClick={()=>AddtoMyFav(recipedetails?.recipe)}>{
          favlist.findIndex(item=>item.id===recipedetails?.recipe.id) !== -1 ?
          'Remove from Favorites' :'Save as Favorites'
          }</button>
          <div className="details-ingredients">
            <span className="ingredients-label">Ingredients:</span>
            <ul className="ingredients-list">
              {
                recipedetails?.recipe?.ingredients.map((i, idx) => (
                  <li className="ingredient-item" key={idx}>
                    <span className="ingredient-qty">{i.quantity} {i.unit}</span>
                    <span className="ingredient-desc">{i.description}</span>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Details