import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
  return (
    <Svg width={30} height={23} viewBox="0 0 30 23" fill="none" {...props}>
      <Path
        d="M12.457 22.689V14.68h5.848v8.009h7.31V12.012H30L15.381 0 .762 12.012h4.386v10.677h7.31z"
        fill="#000"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default Home
