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
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <circle cx='12' cy='12' r='10' stroke={color} strokeWidth='1.5' />
      <path
        d='M12 8V16'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M8 12H16'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}

export default IconAddStation;
