// ============
//  COMPONENT
// ============
import React from 'react';
import Form from './components/Form.js';
import Recipes from './components/Recipes.js';
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
    const call_api = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=12`);

    const results = await call_api.json();
    this.setState({ recipes: results.recipes})
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes: recipes});
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes)
  }
  render() {
    return(
      <div className="App">
        <header className="Header">
          <h1 className="Title">FindMeRecipe</h1>
        </header>
        <Form getRecipes={this.getRecipes}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    )
  }
}
// ===============
// EXPORT
// ===============
export default App
