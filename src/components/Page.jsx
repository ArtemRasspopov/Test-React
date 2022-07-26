import React from "react";

const Page = ({title}) => {
  return (
    <div className="page">
      <p className="title"> {title} </p>
      <div aria-label="Slide 0">go back</div>
    </div>
  );
};

export default Page;
