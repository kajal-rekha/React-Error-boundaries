import React from "react";

const RenderProps = ({ render }) => {
  return (
    <div>
      <h1>Welcome, {render(false)}</h1>
    </div>
  );
};

export default RenderProps;
