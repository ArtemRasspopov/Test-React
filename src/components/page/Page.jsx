import React from "react";

const Page = ({ title }) => {
  return (
    <div className="page" data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <p className="title"> {title} </p>
      </div>
    </div>
  );
};

export default Page;
