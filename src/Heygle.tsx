import { springTiming, TransitionSeries } from '@remotion/transitions'
import React from 'react'
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Logopng } from './HelloWorld/Logopng'

export const Heygle: React.FC = () => {
  console.log("heygle")
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  console.log("Heygle")

  const logoTranslationProgress = spring({
    frame: frame - 20,
    fps,
    config: {
      damping: 100,
    },
  })

  const logoTranslation = interpolate(
    logoTranslationProgress,
    [0, 1],
    [1, -150],
  )

  const scale =
    spring({
      fps,
      frame,
      config: {
        damping: 200,
      },
      delay: 14,
      durationInFrames: 10,
    }) *
    0.9 +
    interpolate(frame, [0, 100], [0, 0.1])

  return (
    <AbsoluteFill
    // style={ {
    //   WebkitMaskImage: `url(${staticFile('logotext.png')})`,
    //   WebkitMaskRepeat: 'no-repeat',
    //   WebkitMaskPosition: 'center',
    //   scale: String(scale),
    // } }
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={ 37 }>
          <AbsoluteFill
            style={ {
              backgroundColor: '#FFF',
              marginTop: "50%",
              display: 'flex',       // Added to use flexbox
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center',
            } }
          />
          <AbsoluteFill
            style={ {
              backgroundColor: '#FFF',
              marginTop: "25%",
              display: 'flex',       // Added to use flexbox
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center',
            } }
          // style={ { transform: `translateY(${logoTranslation}px)` } }
          >
            <Logopng />
          </AbsoluteFill>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  )
}
