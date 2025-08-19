import type { ReactElement } from "react";
import { PlaylistSongs } from "./PlaylistSongs";

export const SongSelector = (): ReactElement => {
  return (
    <div className="song-selector-container">
      <PlaylistSongs
        songs={[
          { artist: "A Rocket to the moon", songName: "Like we used to" },
          { artist: "John Legend", songName: "Save the room" },
          { artist: "John Legend", songName: "We just don't care" },
          { artist: "A Rocket to the moon", songName: "Dakota" },
          { artist: "Zedd & Aloe Blacc", songName: "Candyman" },
          { artist: "Rag'n'Bone Man", songName: "Human" },
          { artist: "Imagine Dragons", songName: "Shots (Broiler Remix)" },
        ]}
      />
    </div>
  );
};
