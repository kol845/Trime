import * as React from "react"
import Svg, { Path } from "react-native-svg"

function InfoIcon(props) {
  return (
    <Svg width={42} height={42} viewBox="0 0 30 30" fill="none" {...props}>
      <Path
        d="M14.5 2.417C7.83 2.417 2.417 7.83 2.417 14.5S7.83 26.584 14.5 26.584 26.584 21.17 26.584 14.5 21.17 2.417 14.5 2.417zm1.209 18.125h-2.417v-7.25h2.417v7.25zm0-9.667h-2.417V8.46h2.417v2.416z"
        fill="#D58258"
      />
      <Path fill="#fff" d="M13 13H16V21H13z" />
      <Path fill="#fff" d="M13 8H16V11H13z" />
    </Svg>
  )
}

export default InfoIcon