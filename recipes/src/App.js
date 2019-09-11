// ============
//  COMPONENT
// ============
import React from 'react';
import Form from './components/Form';
// =================
//  COMPONENT CLASS
// =================
const api_key = "c6ca10d92bf781f3f631415ae0da3205"

class App extends React.Component{
  // ============
  //  STATE
  // ============
  state = {
    recipes: []
  }
  getRecipes = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    const call_api = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=10`);

    const results = await call_api.json();
    this.setState({ recipes: results.recipes})
    console.log(this.state.recipes);
  }
  render() {
    return(
      <div className="App">
        <header className="Header">
          <h1 className="Title">Let's Get Cooking</h1>
        </header>
        <Form getRecipes={this.getRecipes}/>
        {this.state.recipes.map((recipe) => {
          return (
            <div>
              <img src={recipe.image_url} alt="recipe_image"/>
              <p key={recipe.source_url}>{recipe.title}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default App
