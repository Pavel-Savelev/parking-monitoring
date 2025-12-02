import React from 'react';
import { IconProps } from '../type';

function IconListEvents({
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
      <rect width='24' height='24' fill='url(#pattern0_45_6524)' />
      <defs>
        <pattern
          id='pattern0_45_6524'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_45_6524' transform='scale(0.0416667)' />
        </pattern>
        <image
          id='image0_45_6524'
          width='24'
          height='24'
          preserveAspectRatio='none'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR4nGNgGI7Ag4GB4TEDA8N/EvEjqF6C4BEZhv9HsoQggCkmFfwnVt/ws+A/Dj4hdYPHAmLB4LXg/2gcoIPROBiBcUAsIFofzSscDzIteURslTm0AADDrp+a60+V7AAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
}

export default IconListEvents;
