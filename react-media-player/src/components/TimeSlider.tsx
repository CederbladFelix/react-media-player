import type { ReactElement } from "react";

type StartAndEndTime = {
  startTime: string;
  endTime: string;
};

export const TimeSlider = (props: StartAndEndTime): ReactElement => {
  return (
    <div className="time-slider-container">
      <p>{props.startTime}</p>
      <input type="range" min="0" max="100" value="25" className="slider" />
      <p>{props.endTime}</p>
    </div>
  );
};
