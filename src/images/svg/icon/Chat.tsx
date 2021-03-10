import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Chat(props) {
  return (
    <Svg width={22} height={18} viewBox="0 0 22 18" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.354C0 1.73.29 1.131.805.689 1.321.248 2.021 0 2.75 0h16.5c.73 0 1.429.248 1.945.69.515.44.805 1.04.805 1.664v9.416c0 .625-.29 1.223-.805 1.665-.516.441-1.216.69-1.945.69H6.07a1.5 1.5 0 00-.973.344l-3.923 3.358a.73.73 0 01-.352.162.796.796 0 01-.397-.034.676.676 0 01-.309-.216.53.53 0 01-.116-.327V2.354zm6.875 4.708c0 .312-.145.612-.403.832a1.5 1.5 0 01-.972.345 1.5 1.5 0 01-.972-.345 1.098 1.098 0 01-.403-.832c0-.312.145-.611.403-.832a1.5 1.5 0 01.972-.345 1.5 1.5 0 01.972.345c.258.22.403.52.403.832zm5.5 0c0 .312-.145.612-.403.832A1.5 1.5 0 0111 8.24a1.5 1.5 0 01-.972-.345 1.098 1.098 0 01-.403-.832c0-.312.145-.611.403-.832A1.5 1.5 0 0111 5.885a1.5 1.5 0 01.972.345c.258.22.403.52.403.832zM16.5 8.24a1.5 1.5 0 00.972-.345c.258-.22.403-.52.403-.832 0-.312-.145-.611-.403-.832a1.5 1.5 0 00-.972-.345 1.5 1.5 0 00-.972.345c-.258.22-.403.52-.403.832 0 .312.145.612.403.832a1.5 1.5 0 00.972.345z"
        fill="#000"
        fillOpacity={0.8}
      />
    </Svg>
  )
}

export default Chat