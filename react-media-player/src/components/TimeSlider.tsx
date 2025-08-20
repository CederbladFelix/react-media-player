import type { ReactElement } from "react";

interface IStartAndEndTimeProps {
  startTime: string;
  endTime: string;
}

export const TimeSlider = ({
  startTime,
  endTime,
}: IStartAndEndTimeProps): ReactElement => {
  return (
    <div className="time-slider-container">
      <p>{startTime}</p>
      <input type="range" min="0" max="100" value="25" className="slider" />
      <p>{endTime}</p>
    </div>
  );
};
