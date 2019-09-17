import React from 'react'
import {Link} from "react-router-dom"
const api_key = "c6ca10d92bf781f3f631415ae0da3205"
// ===========
// COMPONENT CLASS
// ===========
class Recipe extends React.Component {
  state ={
    fullRecipe: []
  }
  componentDidMount =  async () => {
    const title = this.props.location.state.recipe;
    const request_api = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${title}`)

    const result_api = await request_api.json();
      this.setState({ fullRecipe: result_api.recipes[0]})
      console.log(this.state.fullRecipe);
  }
  render() {
    const recipe = this.state.fullRecipe;
    return(
      <div className="container">
        {this.state.fullRecipe.length !== 0 &&
          <div className="full_recipe">
            <img className="full_recipe_img"
                 src={recipe.image_url}
                 alt=""/>
            <h2 className="full_recipe_title">
                 {recipe.title}
            </h2>
            <h3 className="full_recipe_publisher">
                Publisher:
                {recipe.publisher}
            </h3>
            <p className="full_recipe_source">
                Website:
                <a href={recipe.publisher_url}>
                {recipe.publisher_url}</a>
            </p>
            <button className="full_recipe_button">
                <Link to="/"> Go Back </Link>
            </button>
          </div>
        }
      </div>
    )
  }
}
// ===========
// EXPORT
// ===========
export default Recipe
