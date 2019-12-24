import React from "react";

export const SVG = ({
  style = {}, // Not ideal? Maybe we should pass in direct svg objects...?
  fill = '#fff',
  width = '100%',
  className = '',
  height = '100%',
  // viewBox = '0 0 32 32',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    // viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
        <line x1="0" y1="100%" x2="100%" y2="0"
        style = {{stroke : "rgb(255,0,0)", strokeWidth: "2" }}/>
  </svg>
)