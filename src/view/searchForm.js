import React, { useState } from "react";

function SearchSection({ searchText }) {
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    searchText(search);
  };
  return (
    <div className="searchFormDiv">
      <div className="d-flex justify-content-center align-items-center searchFormOuter">
        <div className="d-flex align-items-center order-12 searchFormCover">
          <div className="container searchFormInner">
            <h1 className="text-center">Search for food recipes</h1>
            <h3 className="text-center">I want to prepare</h3>
            <form onSubmit={onSubmit} className="searchForm">
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Chicken"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      Search for recipes
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
