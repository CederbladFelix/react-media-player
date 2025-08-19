import type { ReactElement } from "react";

export const MediaPlayerButtons = (): ReactElement => {
  return (
    <div className="buttons-container">
      <span className="material-symbols-outlined">repeat</span>
      <div>
        <span className="material-symbols-outlined big-icon">
          keyboard_double_arrow_left
        </span>
        <span className="material-symbols-outlined big-icon">play_circle</span>
        <span className="material-symbols-outlined big-icon">
          keyboard_double_arrow_right
        </span>
      </div>
      <span className="material-symbols-outlined">shuffle</span>
    </div>
  );
};
