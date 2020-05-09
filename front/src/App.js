import React from 'react';
import AllRecipes from './components/allRecipes'
import AddRecipes from './components/addRecipes'
import './App.css';

function App() {
  return (
    <div className="globalForm">
      {/* <AllRecipes /> */}
      <AddRecipes />
    </div>
  );
}

export default App;
