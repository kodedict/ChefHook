/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

// import components
import SearchForm from "./component/searchForm";
import ListRecipe from "./component/listRecipe";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const [list, setList] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      if (query !== "") {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipe(data.hits);
        setList(true);
      }
    } catch {
      setList(false);
    }
  };

  const getSeacrch = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div>
      <SearchForm searchText={getSeacrch} />
      Recipe
      {list
        ? recipe.map((recipe, index) => (
            <ListRecipe
              key={index}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
            />
          ))
        : "Search on food stuffs to prepare"}
    </div>
  );
};

export default App;
