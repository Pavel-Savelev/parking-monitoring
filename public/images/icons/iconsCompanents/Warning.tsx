import React from 'react';
import { IconProps } from '../type';

function IconWarning({
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
      <rect width='24' height='24' fill='url(#pattern0_45_6511)' />
      <defs>
        <pattern
          id='pattern0_45_6511'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            href='#image0_45_6511'
            transform='matrix(0.0208333 0 0 0.0214844 0 -0.015625)'
          />
        </pattern>
        <image
          id='image0_45_6511'
          width='48'
          height='48'
          preserveAspectRatio='none'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2YO0gkMRzGfz6wUzgszl7Ww8LqKsVTEHQtxBMEWbRRGzkUwcLCQrBTOx+tdlpv6YJ2VlccPsDCFQQVVBAO5K4QxQeBDIRldyaZ2Xks5gdfle+ffJlJNtkBi8VisVjCo1aq4mgBcsCL1B6QokJoAu6B9wLdybbEs1skvKMdEk478OYyAdHWSUKpBn67hHf0R3oTx4RGeEfjJIx64NZgAmKTN5AgVgzCO1omITQDT0UCXgIZYAy4LtIuakRt7GRLPOERxTNawpMlZnpclkiv4ut38fXFFb4GOHUJNqB4h1x8Z3Hdl2Y8Numw4s14eKejDv8FePAIJda9w7iH9y/QGOUENjV+JsXB5vBLw78RVfhW4Fkj0JRSM6fhfwHaophATvOgmlVqFjRrDsIO/1MziNC8UrdkUDcYVvg6IG8QZFGpXTWoy8uxys68QYjCU1Z32b0XeXtl4SvwaBhC6FjKtO5Rjlk2tn2ECKqtcoX/Drz6CHADTMrz4MpH/ascOxBVwKHPJ5hW+kn77ONQZvCN1x3GTR1KPx0B+sn4DS/+eF8EGPgE6Aa6gKMA/eT9voVvIW5QU6U+5QSqDU/esHQeZCP/AP7HGP6fzBD4S/O6vA7sR6QcsFZJX7QtFovFQix8AEzWYqIEa7O1AAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
}

export default IconWarning;
