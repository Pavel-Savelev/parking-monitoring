import React from 'react';
import { IconProps } from '../type';

function IconAddStation({
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
      <rect width='24' height='24' fill='url(#pattern0_45_6515)' />
      <defs>
        <pattern
          id='pattern0_45_6515'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_45_6515' transform='scale(0.02)' />
        </pattern>
        <image
          id='image0_45_6515'
          width='50'
          height='50'
          preserveAspectRatio='none'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAUUlEQVR4nO3PsQ2AMADEwOy/dGhYAIWAQXfS9+8xAIBHzHOfN4XECKkRUiOkRkiNkBohO8+8tdv8JmRF6swKITVCaoTUCKkRUiOkRggAMK45AHYIe4WAbtrkAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
}

export default IconAddStation;
