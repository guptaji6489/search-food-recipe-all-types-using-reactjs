import React from 'react';

const Recipes = (props) =>
{
  
    return(
        <>
    <div className="card-columns">
    {
        props.recipes.map(recipe=>(
            
                <div className="card py-2 text-center">
                <img src={recipe.recipe.image} className='img-fluid w-50 mx-auto rounded-circles' />
                    <div className="card-body">
                        <h5>{recipe.recipe.label}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            recipe.recipe.ingredientLines.map(ingredient =>(
                                <li className="list-group-item">{ingredient}</li>
                            ))
                        }
                    </ul>
                </div>
            
        ))
    }
    </div>
        </>
    
    
      )
}

export default Recipes;
