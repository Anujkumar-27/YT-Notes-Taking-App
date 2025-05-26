import YouTube from "react-youtube";
import { usePlayer } from "../contexts/PlayerContext";
import { useNotes } from "../contexts/NotesContext";

function YoutubeVideo() {
  const { player, onReady, vidId: id } = usePlayer();
  const { setTime } = useNotes();

  const opts = {
    height: "500",
    width: "700",
    playerVars: {
      rel: 0,
    },
  };

  const onStateChange = (e) => {
    setTime(() => player.getCurrentTime());
  };

  return (
    <section className="video-container m-auto ">  
      <YouTube
        videoId={id}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </section>
  );
}

export default YoutubeVideo;
