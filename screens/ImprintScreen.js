import React from "react";

const ImprintScreen = () => {
  return (
    <>
      {[...Array(100)].map((x, d) => (
        <p key={d}>Imprint</p>
      ))}
    </>
  );
};

export default ImprintScreen;
