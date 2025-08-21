import { useState, type ReactElement } from "react";
import type { ISong } from "../types";
import { PlaylistSongRow } from "./PlayListSongRow";

interface IPlayListSongsProps {
  songs: ISong[];
}

export const PlaylistSongs = ({ songs }: IPlayListSongsProps): ReactElement => {
  const [songsArray, setSongsArray] = useState<ISong[]>(songs);

  const addSong = () => {
    setSongsArray((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2),
        artist: Math.random().toString(36).slice(2),
        songName: Math.random().toString(36).slice(2),
      },
    ]);
  };

  return (
    <>
      <button onClick={addSong}>Add song</button>
      {songsArray.map((s) => (
        <PlaylistSongRow key={s.id} {...s} />
      ))}
    </>
  );
};
