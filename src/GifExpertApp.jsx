import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Digimon"]);
  // const handleAdd = () => {
  //   //setCategories((cats) => [...cats, "Pokemon"]);
  //   setCategories([...categories, "Pokemon"]);
  // };
  return (
    <>
      <h1>Gif-Expert-App</h1>

      <AddCategory setCat={setCategories} />
      <hr />

      {categories.map((cat) => (
        <GifGrid key={cat} cat={cat} />
      ))}
      <ol></ol>
    </>
  );
};
