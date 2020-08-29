/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//import components
import HeaderSection from "./components/header";
import FooterSection from "./components/footer";

//import view
import SearchSection from "./view/searchForm";
import ListSection from "./view/listRecipe";
import HomeSection from "./view/home";

const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

const App = () => {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [home, setHome] = useState(true);

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
        setHome(false);
      }
    } catch {
      setHome(true);
    }
  };

  const getSeacrch = (searchText) => {
    setQuery(searchText);
  };

  const redirectHome = (getClick) => {
    setHome(getClick);
  };

  return (
    <div>
      <HeaderSection homeCheck={home} getClick={redirectHome} />
      {home ? (
        <div>
          <SearchSection searchText={getSeacrch} />
          <HomeSection />
        </div>
      ) : (
        <div>
          <div className="mt50">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 style={{ color: "#528f2d" }}>
                    Showing recipes for {query}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mainListCover">
              <div className="container">
                <div className="row listRow">
                  {recipe.map((recipe, index) => (
                    <ListSection
                      key={index}
                      searchTitle={query}
                      title={recipe.recipe.label}
                      image={recipe.recipe.image}
                      ingredients={recipe.recipe.ingredients}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <FooterSection />
    </div>
  );
};

export default App;
