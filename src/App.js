import "animate.css";
import Iframe from "react-iframe";
import { TikTokEmbed } from "react-social-media-embed";

function App() {
  // console.log();
  // const apiKey = "AIzaSyDp5V3Q7PIA7d0rLQc6me58X280lyVrfTk";
  // const chanelId = "@NIGHTRIDEEE";
  // // const fetchUrl = `https://www.googleapis.com/youtube/v3/videos?key=[]`

  // fetch(`https://www.tiktok.com/@scout2015/video/6718335390845095173`)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <main className="wrapper">
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/pa2J3liXvuA"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item--fullsize">
        <TikTokEmbed
          url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
          width={280}
          height={570}
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <iframe
          title={'Video'}
          src={"https://vk.com/video_ext.php?oid=-84440824&id=456257679&hash=915c6c9d14b4bdc1&hd=2"}
          width="280px"
          height="200px"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameBorder="0"
          allowFullScreen
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <TikTokEmbed
          url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
          width={280}
          height={200}
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item--fullsize">
        <TikTokEmbed
          url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
          width={280}
          height={570}
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/pa2J3liXvuA"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/pa2J3liXvuA"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <iframe
          title={'Video'}
          src="https://vk.com/video_ext.php?oid=-84440824&id=456257679&hash=915c6c9d14b4bdc1&hd=2"
          width="280px"
          height="200px"
          allow="encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <TikTokEmbed
          url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
          width={280}
          height={200}
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/jfKfPfyJRdk"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/0Z8783ZAtmI"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
      <div className="item">
        <Iframe
          url="https://www.youtube.com/embed/MkBO8imD57k"
          width="280px"
          height="200px"
          id=""
          className=""
          display="block"
          position="relative"
        />
        <p className="title">
          Название видео
        </p>
      </div>
    </main>
  );
}

export default App;
