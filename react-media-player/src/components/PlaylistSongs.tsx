import type { ReactElement } from "react";
import SongImage from "../assets/song-image.png";

type SongsMeta = Array<{
  artist: string;
  songName: string;
}>;

export const PlaylistSongs = ({
  songs,
}: {
  songs: SongsMeta;
}): ReactElement => {
  return (
    <>
      {songs.map((song) => (
        <div className="song-container">
          <img src={SongImage} className="song-image" alt="Song Cover"></img>
          <div className="songname-artist-container">
            <h4>{song.artist}</h4>
            <p>{song.songName}</p>
          </div>
          <span className="material-symbols-outlined">play_circle</span>
        </div>
      ))}
    </>
  );
};
