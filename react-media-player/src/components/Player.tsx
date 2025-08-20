import type { ReactElement } from "react";
import SongImage from "../assets/song-image.png";
import { MetaSection } from "./MetaSection";
import { TimeSlider } from "./TimeSlider";
import { MediaPlayerButtons } from "./MediaPlayerButtons";
import { songs } from "../data";

export const Player = (): ReactElement => {
  return (
    <div className="player-container">
      <img src={SongImage} className="player-image" alt="Song Cover" />
      <MetaSection song={songs[0]} />
      <TimeSlider startTime="0:40" endTime="3:42" />
      <MediaPlayerButtons />
    </div>
  );
};
