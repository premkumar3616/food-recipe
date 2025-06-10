import React,{useContext} from 'react'
import { RecipeContext } from '../../context'
import RecipeItem from '../../components/recipe';
import './Home.css'

function Home() {
  const {loading,recipelist} = useContext(RecipeContext);
  if (loading) {
    return <div className='loading'>Loading...</div>
  }
  return (
    <div className='home-container'>
      {
      recipelist && recipelist.length > 0 ?
      recipelist.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      : <div className='no-recipes'><p>No recipes found. Please try a different search.</p></div>
}
    </div>
  )
}

export default Home