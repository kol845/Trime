import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeroTopWave(props) {
  return (
    <Svg width={380} height={69} viewBox="0 0 375 69" fill="none" {...props}>
      <Path
        d="M374.878 2.086l.339 63.785-446.867 2.377c91.186-5.78 76.582-32.175 201.925-32.675 95.896-.386 195.312-23.5 229.916-34.705 4.876-1.569 14.676-.751 14.687 1.218z"
        fill="#fff"
      />
    </Svg>
  )
}

export default HeroTopWave