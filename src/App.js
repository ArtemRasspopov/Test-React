import React from "react";
import Page from "./components/Page";
import fullpage from "fullpage.js/dist/fullpage";

function App() {
  React.useEffect(
    () =>
      new fullpage("#fullpage", {
        licenseKey: "FULL_PAGE_SCROLL",
        autoScrolling: true,
        lockAnchors: false,
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],
      }),
    []
  );

  return (
    <>
      <div className="App" id="fullpage">
        <div className="section">
          <Page title={"section 1"} />
        </div>
        <div className="section">
          <Page title={"section 2"} />
        </div>
        <div className="section">
          <Page title={"section 3"} />
        </div>
        <div className="section">
          <Page title={"section 4"} />
        </div>
        <div className="section">
          <Page title={"section 5"} />
        </div>
        <div className="section">
          <Page title={"section 6"} />
        </div>
      </div>
      <a className="to-top-button" href="#section1">
        Наверх
      </a>
    </>
  );
}

export default App;
