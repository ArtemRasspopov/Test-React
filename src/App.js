import "animate.css";
import { TikTokEmbed, YouTubeEmbed } from "react-social-media-embed";

function App() {


  const items = [
    {youtubevideoLink : "https://www.youtube.com/watch?v=Au2GSKZPcBM", origin : "youtube"},
    {vkVideoLink : "https://vk.com/video_ext.php?oid=-184347033&id=456246465&hash=2f8be4a1ac719bab&hd=2", origin : "vk"},
    {tikTokVideoLink : "https://www.tiktok.com/@epicgardening/video/7055411162212633903", origin : "tiktok"}
  ]

  const youtubevideoLink = "https://www.youtube.com/watch?v=Au2GSKZPcBM";
  const vkVideoLink = "https://vk.com/video_ext.php?oid=-184347033&id=456246465&hash=2f8be4a1ac719bab&hd=2";
  const tikTokVideoLink = "https://www.tiktok.com/@epicgardening/video/7055411162212633903";


  return (
    <main className="wrapper">
      <div className="item">
        <img
          className="image"
          src="https://i.ytimg.com/vi/pa2J3liXvuA/maxresdefault.jpg"
          alt="youtubevideo"
        ></img>
        <p className="title">Фото из ссылки ютуб</p>
      </div>
      <div className="item">
        <YouTubeEmbed
          height={200}
          width={280}
          // placeholderImageUrl="https://i.ytimg.com/vi/pa2J3liXvuA/maxresdefault.jpg?t=1670421305388"
          url={youtubevideoLink}
        />
        <p className="title">Видео из ютуб</p>
      </div>
      <div className="item">
        <iframe
          title={"sdsdsd"}
          src={vkVideoLink}
          width="280"
          height="200"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p className="title">Видео из vk с хэшем</p>
      </div>
      <div className="item">
        <iframe
          title={"sdsdsd"}
          src={"https://vk.com/video?z=video-71226649_456239441%2Fpl_cat_trends"}
          width="280"
          height="200"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <p className="title">Видео из вк</p>
      </div>
      <div className="item">
        <TikTokEmbed url={tikTokVideoLink} width={325} />
        <p className="title">Видео из тикток</p>
      </div>
    </main>
  );
}

export default App;
