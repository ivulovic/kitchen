import * as React from 'react';

const ChartIcon = props => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g stroke="none">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M5 3v16h16v2H3V3h2zm15.293 3.293 1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" />
    </g>
  </svg>
);

export default ChartIcon;
