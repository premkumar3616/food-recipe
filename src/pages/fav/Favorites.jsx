import React,{useContext} from 'react'
import RecipeItem from '../../components/recipe';
import { RecipeContext } from '../../context';

function Favorites() {
  const {favlist} = useContext(RecipeContext)
  
  return (
    <div className='home-container'>
      {
      favlist && favlist.length > 0 ?
      favlist.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      : <div className='no-recipes'><p>Nothing is added in Favorites</p></div>
}
    </div>
  )
}

export default Favorites