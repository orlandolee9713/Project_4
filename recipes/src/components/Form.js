// ===============
// COMPONENT
// ===============
import React from 'react';

// ===============
// CLASS COMPONENT
// ===============
// Stateless Functional Component
const Form = (opts) => (
  <form onSubmit={opts.getRecipes} style={{marginBottom:"2rem"}}>
    <input className="input" type="text" name="recipeName"/>
    <button className="button">Search</button>
  </form>
);

// ===============
// EXPORT
// ===============
export default Form;
