import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FeedBackground(props) {
  return (
    <Svg width={213} height={208} viewBox="0 0 213 208" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104.935-22.441c30.646 2.597 52.494 20.021 71.445 37.068 16.338 14.696 22.562 33.478 28.319 52.67 5.916 19.722 10.475 39.184 5.465 59.951-6.469 26.82-5.758 61.906-38.264 76.024-32.962 14.316-66.485-11.46-101.816-15.183-29.015-3.058-63.848 8.347-86.16-4.628-22.397-13.025-25.242-38.09-25.642-60.391-.349-19.481 15.2-37.124 23.553-56.318 9.85-22.636 6.27-49.11 29.713-66.094 24.742-17.927 61.514-25.8 93.387-23.1z"
        fill="url(#paint0_linear)"
        fillOpacity={0.3}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={108.506}
          y1={-22.8168}
          x2={106.355}
          y2={207.152}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#194950" />
          <Stop offset={1} stopColor="#100F0D" stopOpacity={0.41} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FeedBackground