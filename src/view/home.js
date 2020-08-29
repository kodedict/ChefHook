import React from "react";

const HomeSection = () => {
  return (
    <div>
      <div className="highlight-clean">
        <div className="container">
          <div className="recipeDiv">
            <h2 className="text-center">Recipes</h2>
            <p className="text-center">
              It is important to view a recipe book as one that you use daily
              and what we in our family call "a living book" — a book that you
              use all the time, not just read once and discard on the shelf. It
              is in a sense a spell book, a book of magical enchantments, to be
              consulted, used and altered as needed.
            </p>
          </div>
        </div>
      </div>
      <div id="howTo" className="highlight-clean howTo">
        <div className="container">
          <div className="intro">
            <h3>How to use</h3>
            <p>
              Simply type the food item you want to prepare e.g chicken, fish. A
              list of different recipes will be shown plus the ingredients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
