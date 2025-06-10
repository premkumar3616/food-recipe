import React,{useContext} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { RecipeContext } from '../../context'
function Navbar() {
  const {searchparam, setSearchParam, handleSubmit} = useContext(RecipeContext);
  console.log(searchparam);

  return (
    <nav className="navbar">
      <h2><NavLink to="/">Food Recipe</NavLink></h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        className='search' 
        name='search'
        value={searchparam} 
        placeholder="Search for recipes..." 
        onChange={(event)=>setSearchParam(event.target.value)}/>
        
      </form>
      <ul className='list'>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
            </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
            Favorites
          </NavLink>
        </li>
      </ul>
        </nav>
  )
}

export default Navbar