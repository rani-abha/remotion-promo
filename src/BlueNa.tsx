import { AbsoluteFill } from 'remotion'
import React from 'react'
import { fontFamily } from './font'
import { ORANGE } from './colors'

export const BlueNa: React.FC = () => {
  console.log("blue na")
  return (
    <AbsoluteFill
      style={ {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily,
        fontSize: 300,
        color: 'white',
        backgroundColor: ORANGE,
        fontWeight: 'bolder',
        fontVariationSettings: `"wght" 900, "wdth" 125`,
      } }
    >
      BUY
    </AbsoluteFill>
  )
}
