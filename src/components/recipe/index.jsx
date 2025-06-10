import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function RecipeItem({ recipe }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null; // Don't render if image fails

  return (
    <div className='items'>
      <div className="item">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          onError={() => setImgError(true)}
        />
        <div className="content">
          <span className='publisher'>{recipe.publisher}</span>
          <h3>{recipe.title}</h3>
          <Link to={`/recipe-item/${recipe.id}`} className='btn'>View Recipe</Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem