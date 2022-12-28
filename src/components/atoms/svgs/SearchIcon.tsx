import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface SearchIcon {
  width?: number;
  height?: number;
  color?: string;
}

const SearchIcon = ({
  width = 24,
  height = 24,
  color = '#8C9093',
}: SearchIcon) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Circle cx={11.5} cy={11.5} r={7.5} stroke={color} strokeWidth={1.5} />
      <Path
        d="M17 17l3 3"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
