import React from "react";

const ListSection = ({ title, image, ingredients }) => {
  return (
    <div className="col-md-6 listCover">
      <div className="row">
        <div className="col-md-4 imgDiv">
          <div className="listOuter">
            <img
              className="img-fluid imgCover"
              alt={title}
              src={image}
              width="200"
            />
          </div>
        </div>
        <div className="col-md-8 listContent">
          <h3>{title}</h3>
          <ol>
            {ingredients.map((ingredients, index) => (
              <li key={index}>{ingredients.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ListSection;
