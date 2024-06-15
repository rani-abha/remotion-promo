import { AbsoluteFill } from 'remotion'
import React from 'react'
import { fontFamily } from './font'
import { BLUE } from './colors'

export const BlueNa: React.FC = () => {
  console.log("blue na")
  return (
    <AbsoluteFill
      style={ {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily,
        fontSize: 250,
        color: 'white',
        backgroundColor: BLUE,
        fontWeight: 'bolder',
        fontVariationSettings: `"wght" 900, "wdth" 125`,
      } }
    >
      SHOP
    </AbsoluteFill>
  )
}
