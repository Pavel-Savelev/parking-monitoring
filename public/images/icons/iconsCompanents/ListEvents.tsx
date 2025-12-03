import React from 'react';
import { IconProps } from '../type';

function IconListEvents({
  className = '',
  width = 24,
  height = 24,
  color = 'var(--color-icon)'
}: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <rect
        x='4'
        y='4'
        width='16'
        height='16'
        rx='2'
        stroke={color}
        strokeWidth='1.5'
      />
      <line
        x1='7'
        y1='8'
        x2='17'
        y2='8'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='7'
        y1='12'
        x2='14'
        y2='12'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <line
        x1='7'
        y1='16'
        x2='11'
        y2='16'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}

export default IconListEvents;
