import type { ReactElement } from "react";
import SongImage from "../assets/song-image.png";
import type { ISong } from "../types";

interface IPlayListSongsProps {
  songs: ISong[];
}

export const PlaylistSongs = ({ songs }: IPlayListSongsProps): ReactElement => {
  return (
    <>
      {songs.map((s) => (
        <div key={s.id} className="song-container">
          <img src={SongImage} className="song-image" alt="Song Cover"></img>
          <div className="songname-artist-container">
            <h4>{s.artist}</h4>
            <p>{s.songName}</p>
          </div>
          <span className="material-symbols-outlined">play_circle</span>
        </div>
      ))}
    </>
  );
};
