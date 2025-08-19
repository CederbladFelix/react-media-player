import type { ReactElement } from "react";
import SongImage from "../assets/song-image.png";

export const Player = (): ReactElement => {
  return (
    <div className="player-container">
      <img src={SongImage} className="player-image" alt="Song Cover"></img>
      <div className="meta-section">
        <span className="material-symbols-outlined">add_circle</span>
        <div className="songname-artist-player-container">
          <h4>A rocket to the Moon</h4>
          <p>Like we used to</p>
        </div>
        <span className="material-symbols-outlined">heart_plus</span>
      </div>
      <div className="time-slider-container">
        <p>0:00</p>
        <input type="range" min="0" max="100" value="25" className="slider" />
        <p>3:42</p>
      </div>
      <div className="buttons-container">
        <span className="material-symbols-outlined">repeat</span>
        <div>
          <span className="material-symbols-outlined big-icon">
            keyboard_double_arrow_left
          </span>
          <span className="material-symbols-outlined big-icon">
            play_circle
          </span>
          <span className="material-symbols-outlined big-icon">
            keyboard_double_arrow_right
          </span>
        </div>
        <span className="material-symbols-outlined">shuffle</span>
      </div>
    </div>
  );
};
