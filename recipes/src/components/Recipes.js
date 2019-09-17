// ===============
// COMPONENT
// ===============
import React from 'react';
import {Link} from "react-router-dom"
// ===============
// COMPONENT CLASS
// ===============
const Recipes = (opts) => (
  <div className="container">
    <div className="row">
      {opts.recipes.map((recipe) => {
        return(
          <div key={recipe.title} className="columns">
            <div className="box">
              <img
                className="image_box"
                src={recipe.image_url}
                alt=""/>
                <div className="text"/>
                  <h2 className="title">
                    {recipe.title.length < 20 ? `${recipe.title}`
                    :
                    `${recipe.title.substring(0, 25)}...`}
                  </h2>
                  <p className="subtitles">Publisher: <span>
                  {recipe.publisher}</span></p>
                </div>
                <button className="view">
                  <Link to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: {recipe: recipe.title}
                 }}>View Recipe</Link>
                </button>
            </div>
          );
        })}
    </div>
  </div>
)
// ===============
// EXPORT
// ===============
export default Recipes;
