import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__flipInX">
      <img src={url} alt={title} />
      <p>
        <b>{title}</b>
      </p>
    </div>
  );
};
