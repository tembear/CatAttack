import React from "react";

export const SearchBox = (props) => {
  return (
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
