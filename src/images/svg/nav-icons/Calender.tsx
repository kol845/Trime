import * as React from "react"

function Calender(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5.688a.688.688 0 10-1.375 0v.687H2.75A2.75 2.75 0 000 4.125V5.5h22V4.125a2.75 2.75 0 00-2.75-2.75h-1.375V.687a.687.687 0 10-1.375 0v.688h-11V.687zM0 6.875h22V19.25A2.75 2.75 0 0119.25 22H2.75A2.75 2.75 0 010 19.25V6.875z"
        fill="#000"
        fillOpacity={0.6}
      />
    </svg>
  )
}

export default Calender
