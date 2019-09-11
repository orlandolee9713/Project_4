import React from 'react';

// Stateless Functional Component
const Form = (opts) => (
  <form onSubmit={opts.getRecipes}>
    <input type="text" name="recipeName"/>
    <button>Search</button>
  </form>
);
export default Form;
