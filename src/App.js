import Page from "./components/page/Page";
import Gallery from "./components/gallery/Gallery";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {

  useLocoScroll()

  return (
      <main data-scroll-container id="main-container">
        <Page title={"header"} />
        <Page title={"page 2"} />
        <Page title={"page 3"} />
        <Gallery />
        <Page title={"page 4"} />
      </main>
  
  );
}

export default App;
