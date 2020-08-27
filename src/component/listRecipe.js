import React from "react";

const ListRecipe = ({ title, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
};

export default ListRecipe;
