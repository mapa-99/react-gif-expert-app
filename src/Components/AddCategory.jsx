import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCat }) => {
  const [inputValue, SetInputValue] = useState("");

  const handleInputChange = (e) => {
    SetInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim().length > 2 && setCat((cats) => [ inputValue,...cats]);
    SetInputValue("");

    //console.log("Me la pela el submit");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCat: PropTypes.func.isRequired,
};
