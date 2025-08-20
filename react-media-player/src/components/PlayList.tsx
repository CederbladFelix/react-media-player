import type { ReactElement } from "react";
import { PlaylistSongs } from "./PlaylistSongs";
import { songs } from "../data";

export const PlayList = (): ReactElement => {
  return (
    <div className="song-selector-container">
      <PlaylistSongs songs={songs} />
    </div>
  );
};
