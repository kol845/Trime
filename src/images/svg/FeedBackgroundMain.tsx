import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FeedBackgroundMain(props) {
  return (
    <Svg width={415} height={356} viewBox="0 0 375 348" fill="none" {...props}>
      <Path
        d="M222.237 298.631c146.234-27.195 249.008-134.053 229.552-238.675C432.333-44.667 298.014-107.434 151.78-80.24 5.546-53.046-97.228 53.813-77.772 158.435c19.457 104.623 153.775 167.39 300.009 140.196z"
        fill="url(#paint0_linear)"
        fillOpacity={0.6}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={-77.7718}
          y1={158.428}
          x2={451.798}
          y2={59.9463}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#194950" />
          <Stop offset={1} stopColor="#90997C" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FeedBackgroundMain
