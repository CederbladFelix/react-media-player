import type { ReactElement } from "react";
import type { ISong } from "../types";

interface IMetaSectionProps {
  song: ISong;
}

export const MetaSection = ({ song }: IMetaSectionProps): ReactElement => {
  const { artist, songName } = song;
  return (
    <div className="meta-section">
      <span className="material-symbols-outlined">add_circle</span>
      <div className="songname-artist-player-container">
        <h4>{artist}</h4>
        <p>{songName}</p>
      </div>
      <span className="material-symbols-outlined">heart_plus</span>
    </div>
  );
};
