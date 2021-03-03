import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FeedBottomGgLeft(props) {
  return (
    <Svg width={203} height={317} viewBox="0 0 203 317" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.62 35.56c34.873 11.318 58.544 36.677 78.929 60.82 17.574 20.814 23.261 43.381 28.382 66.275 5.263 23.525 8.992 46.39 1.672 68.07-9.453 27.998-11.321 67.151-49.6 73.881-38.816 6.825-75.21-31.019-115.357-44.876-32.972-11.38-73.706-8.302-98.247-28.849-24.637-20.626-25.977-49.24-24.73-74.111 1.09-21.727 20.233-37.037 31.258-56.051 13.002-22.422 10.93-52.801 39.056-65.21 29.685-13.096 72.37-11.718 108.637.052z"
        fill="url(#paint0_linear)"
        fillOpacity={0.4}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={57.7361}
          y1={36.1269}
          x2={-3.31724}
          y2={280.637}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#194950" />
          <Stop offset={1} stopColor="#194950" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FeedBottomGgLeft
