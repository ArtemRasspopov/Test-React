import React from "react";
import Page from "./components/Page";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

function App() {

  return (
    <div className="App">
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Page title={"section 1"} />
          </FullpageSection>
          <FullpageSection>
            <Page title={"section 2"} />
          </FullpageSection>
          <FullpageSection>
            <Page title={"section 3"} />
          </FullpageSection>
          <FullpageSection>
            <Page title={"section 4"} />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
      {/* <button className="scrollToTop" onClick={() => scrollToTop()}>
        scroll top
      </button> */}
    </div>
  );
}

export default App;
