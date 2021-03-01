import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function FooterPattern(props) {
  return (
    <Svg width={634} height={312} viewBox="0 0 634 312" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.581 124.888c12.18-29.084 35.403-47.62 57.353-63.425 18.923-13.626 38.442-16.956 58.196-19.78 20.298-2.9 39.923-4.534 57.72 3.212 22.985 10.002 55.974 14.271 58.812 47.501 2.878 33.697-31.86 62.273-46.582 95.7-12.09 27.451-12.526 62.535-31.743 82.144-19.292 19.685-43.602 18.881-64.554 16.117-18.302-2.415-29.828-19.847-45.093-30.583-18.002-12.66-43.861-12.959-52.261-37.883-8.865-26.307-4.514-62.756 8.152-93.003z"
        fill="url(#paint0_linear)"
        fillOpacity={0.4}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M418.445 95.253c9.267-21.12 28.989-33.721 47.724-44.347 16.152-9.16 33.409-10.57 50.904-11.59 17.976-1.046 35.422-1.179 51.755 5.614 21.095 8.774 50.81 13.806 55.192 38.868 4.444 25.413-25.009 44.899-36.307 69.132-9.278 19.902-7.718 46.17-23.8 59.798-16.145 13.681-37.913 11.728-56.788 8.492-16.488-2.826-27.756-16.531-41.993-25.425-16.79-10.489-39.913-12.149-48.804-31.296-9.383-20.207-7.52-47.282 2.117-69.246z"
        fill="url(#paint1_linear)"
        fillOpacity={0.2}
      />
      <Path
        d="M529 38.762V215H41c99.61-14.63 83.816-87.772 220.695-87.309 104.722.341 213.421-62.061 251.274-92.508 5.333-4.264 16.031-1.86 16.031 3.58z"
        fill="url(#paint2_linear)"
        fillOpacity={0.1}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={41.3675}
          y1={121.402}
          x2={243.698}
          y2={190.346}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#394C4F" />
          <Stop offset={1} stopColor="#194950" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={418.954}
          y1={92.6844}
          x2={603.581}
          y2={155.596}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#194950" />
          <Stop offset={1} stopColor="#194950" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={285}
          y1={33}
          x2={285}
          y2={215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#90997C" />
          <Stop offset={1} stopColor="#194950" stopOpacity={0.56} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default FooterPattern