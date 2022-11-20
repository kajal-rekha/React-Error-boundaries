import React from "react";

const JersyMaker = ({ name, jerseyNum }) => {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h1>{jerseyNum}</h1>
    </div>
  );
};

export default JersyMaker;
