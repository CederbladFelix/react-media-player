import type { ReactElement } from "react";

type SongMeta = {
  artist: string;
  songName: string;
};

export const MetaSection = (props: SongMeta): ReactElement => {
  return (
    <div className="meta-section">
      <span className="material-symbols-outlined">add_circle</span>
      <div className="songname-artist-player-container">
        <h4>{props.artist}</h4>
        <p>{props.songName}</p>
      </div>
      <span className="material-symbols-outlined">heart_plus</span>
    </div>
  );
};
