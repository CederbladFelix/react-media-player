import type { ReactElement } from "react";
import type { ISong } from "../types";
import { PlaylistSongRow } from "./PlayListSongRow";

interface IPlayListSongsProps {
  songs: ISong[];
}

export const PlaylistSongs = ({ songs }: IPlayListSongsProps): ReactElement => {
  return (
    <>
      {songs.map((s) => (
        <PlaylistSongRow key={s.id} {...s} />
      ))}
    </>
  );
};
