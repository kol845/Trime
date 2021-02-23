import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FacebookIcon() {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Circle cx={16} cy={16} r={14} fill="url(#prefix__paint0_linear)" />
      <Path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#18ACFE" />
          <Stop offset={1} stopColor="#0163E0" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FacebookIcon