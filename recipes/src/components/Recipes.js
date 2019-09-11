// ===============
// COMPONENT
// ===============
import React from 'react';

// ===============
// COMPONENT CLASS
// ===============
const Recipes = (opts) => (
  <div>
    {opts.recipes.map((recipe) => {
      return(
        <div key={recipe.source_url}>
          <img src={recipe.image_url} alt="recipe_image"/>
          <h1>{recipe.title}</h1>
        </div>
      )
    })}
  </div>
)
// ===============
// EXPORT
// ===============
export default Recipes;
