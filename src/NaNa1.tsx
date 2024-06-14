import { useCurrentFrame } from 'remotion'
import { useVideoConfig } from 'remotion'
import { AbsoluteFill, spring } from 'remotion'
import React from 'react'
import { ORANGE } from './colors'
import { fontFamily } from './font'

interface NaNa1Props {
  title: string
}

export const NaNa1: React.FC<NaNa1Props> = ({ title }) => {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()
  console.log("na na 1")
  return (
    <AbsoluteFill
      style={ {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily,
        fontSize: 250,
        color: 'white',
        backgroundColor: ORANGE,
        fontWeight: 'bolder',
        fontVariationSettings: `"wght" 900, "wdth" 125`,
      } }
    >
      <div>
        <span
          style={ {
            display: 'inline-block',
            scale: String(spring({ fps, frame, durationInFrames: 10 })),
          } }
        >
          { title }{ ' ' }
        </span>
        <span
          style={ {
            display: 'inline-block',
            scale: String(spring({ fps, frame, durationInFrames: 10, delay: 5 })),
          } }
        >
          .
        </span>
      </div>
    </AbsoluteFill>
  )
}
