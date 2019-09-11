// ===============
// COMPONENT
// ===============
import React from 'react';

// ===============
// CLASS COMPONENT
// ===============
// Stateless Functional Component
const Form = (opts) => (
  <form onSubmit={opts.getRecipes}>
    <input type="text" name="recipeName"/>
    <button>Search</button>
  </form>
);

// ===============
// EXPORT
// ===============
export default Form;
