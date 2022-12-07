import React from "react";

const Page = ({ title }) => {
  return (
    <div className="page" data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <div className="logoEx">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <p className="circle-title">EXLab</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
