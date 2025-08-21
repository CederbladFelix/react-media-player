import type { ReactElement } from "react";
import SongImage from "../assets/song-image.png";
import type { ISong } from "../types";

export const PlaylistSongRow = ({ artist, songName }: ISong): ReactElement => {
  return (
    <div className="song-container">
      <img src={SongImage} className="song-image" alt="Song Cover"></img>
      <div className="songname-artist-container">
        <h4>{artist}</h4>
        <p>{songName}</p>
      </div>
      <span className="material-symbols-outlined">play_circle</span>
    </div>
  );
};
