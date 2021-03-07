import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeroWave(props) {
  return (
    <Svg width={430} height={68} viewBox="0 0 375 68" fill="none" {...props}>
      <Path
        d="M387.011 2.062l.335 63.045-446.866 2.377c91.186-5.719 76.584-31.807 201.926-32.308 95.896-.388 195.314-23.24 229.918-34.317 4.876-1.551 14.677-.743 14.687 1.203z"
        fill="#fff"
      />
    </Svg>
  )
}

export default HeroWave
