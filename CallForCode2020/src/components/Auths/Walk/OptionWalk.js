import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function OptionWalk(props) {
  return (
    <Svg width={166} height={105} viewBox="0 0 166 105" fill="none" {...props}>
      <G filter="url(#prefix__filter0_d)">
        <Rect width={165.492} height={105} rx={6} fill="#fff" />
        <Rect width={165.492} height={105} rx={6} stroke="#12CAB0" />
      </G>
      <Path
        d="M62.959 47h2.111v-7.376H62.96v3.136h-2.577v1.68h2.577V47zm-9.184-6.816v1.68h4.175c-.272 1.744-1.808 3.152-5.024 3.872l.704 1.648c4.32-1.024 6.592-3.36 6.592-7.2h-6.447zm3.712 12.384v-.928h7.583v-4.08H55.36v1.664h7.6v.848h-7.585v4.16h10v-1.664h-7.887zM71.5 49.272c-1.072 0-1.792-1.168-1.792-3.36 0-2.176.72-3.344 1.792-3.344 1.088 0 1.808 1.168 1.808 3.344 0 2.192-.72 3.36-1.808 3.36zm6.224-9.648v5.312h-2.464c-.288-2.656-1.776-4.272-3.76-4.272-2.192 0-3.808 2.016-3.808 5.248 0 3.248 1.616 5.28 3.808 5.28 2.048 0 3.552-1.728 3.776-4.544h2.448v7.76h2.112V39.624h-2.112zm9.135 1.52v1.712h4.816c-.384 3.264-2.208 5.6-5.632 7.36l1.184 1.616c4.896-2.48 6.576-6.272 6.576-10.688H86.86zm12.928 4.112h-2.064v-5.632h-2.112v14.72h2.112V47h2.064v-1.744zm1.935-4.096v1.68h4.912c-.304 3.264-1.936 5.568-5.696 7.376l1.104 1.664c5.232-2.528 6.752-6.208 6.752-10.72h-7.072zm9.328-1.536V54.36h2.128V39.624h-2.128z"
        fill="#000"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default OptionWalk
