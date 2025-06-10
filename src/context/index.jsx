import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext(null);


export default function RecipeProvider({ children }) {
    const [searchparam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipelist, setRecipeList] = useState([]);
    const [recipedetails, setRecipeDetails] = useState(null);

    const [favlist, setFavlist] = useState([]);
    const navigate = useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`)
            const data = await res.json();

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                setSearchParam(""); // Clear the search input after submission
                navigate('/')
            }

        }
        catch (error) {
            console.error("Error in handleSubmit:", error);
            setLoading(false);
            setSearchParam(""); // Clear the search input after submission
        }
    }
    function AddtoMyFav(item ) {
        
        let cpyfavlist =[...favlist]
        const index =cpyfavlist.findIndex(fav=>fav.id ===item.id)
        if(index === -1){
            cpyfavlist.push(item)
        }
        else{
            cpyfavlist.splice(index)
        }
        setFavlist(cpyfavlist)
        
    }
    
    return (
        <RecipeContext.Provider value={{ searchparam, setSearchParam, handleSubmit, loading, recipelist, recipedetails, setRecipeDetails, favlist, AddtoMyFav }}>
            {children}
        </RecipeContext.Provider>
    );
}   