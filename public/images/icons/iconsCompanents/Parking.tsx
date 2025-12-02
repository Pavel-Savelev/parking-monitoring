import React from 'react';
import { IconProps } from '../type';

function IconParking({
  className = '',
  width = 24,
  height = 24,
  color = 'currentColor'
}: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
    >
      <rect width='22' height='22' fill='url(#pattern0_45_6528)' />
      <defs>
        <pattern
          id='pattern0_45_6528'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_45_6528' transform='scale(0.0384615)' />
        </pattern>
        <image
          id='image0_45_6528'
          width='26'
          height='26'
          preserveAspectRatio='none'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO2WMQ4BQRSGv4Q4g1blCApOoRWHEJVEi0NwAqVep6PRKDQaWj3CyONJJpPdtcsMifiTv9j3z843M7vJPLjLqIl59ibzUyDzxGnHGcc7YAAUQoOMup8VlFVVa2dBQbhz7BMgknkDtRJALZ8gURc4WcFJa7aiFnIE1kAHyDvj7XfSB1Y2AcbqKXDQ+tA3qOjUK3oCF6AUEiSaaVYnMGiuWTMkqAGc9ejKPkFLYKHeWPVRlvnSgNzfewW0gZxvUNQ3itMf9FnQKzJfB+00kNvxXdV0rm1UKM3Esxs3q3tRIOlYBPbY2TuWnQjk1gVdAU1q/LZnQ3YUAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
}

export default IconParking;
