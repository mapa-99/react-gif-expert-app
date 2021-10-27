import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ cat }) => {
  const { data: images, loading } = useFetchGifs(cat);

  console.log(loading);

  return (
    <>
      <h3>{cat}</h3>
      {loading && (
       <p>Carganding...</p>
      )}
      <div className="card-container">
        {images.map((img) => (
          <GifGridItem key={img.id} img={img} {...img} /> // manda todo el objeto para la desestructuración
        ))}
      </div>
    </>
  );
};
