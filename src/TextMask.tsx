import { springTiming, TransitionSeries } from '@remotion/transitions'
import { slide } from '@remotion/transitions/slide'
import { wipe } from '@remotion/transitions/wipe'
import React from 'react'
import {
  AbsoluteFill,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { BLUE, GREEN, ORANGE, PINK } from './colors'
import { circleWipe } from './presentations/circle-wipe'
import { clockWipe } from './presentations/clock-wipe'

export const TextMask: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  console.log("text mask")

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
  // AT YOUR CONVENIENCE
  return (
    <AbsoluteFill
      style={ {
        WebkitMaskImage: `url(${staticFile('e.png')})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        scale: String(scale),
      } }
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={ 27 }>
          <AbsoluteFill
            style={ {
              backgroundColor: GREEN,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ slide() }
        />
        <TransitionSeries.Sequence durationInFrames={ 20 }>
          <AbsoluteFill
            style={ {
              backgroundColor: BLUE,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ slide({ direction: 'from-top' }) }
        />
        <TransitionSeries.Sequence durationInFrames={ 25 }>
          <AbsoluteFill
            style={ {
              backgroundColor: PINK,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ wipe({ direction: 'from-bottom' }) }
        />
        <TransitionSeries.Sequence durationInFrames={ 25 }>
          <AbsoluteFill
            style={ {
              backgroundColor: ORANGE,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ wipe({ direction: 'from-bottom-right' }) }
        />
        <TransitionSeries.Sequence durationInFrames={ 25 }>
          <AbsoluteFill
            style={ {
              backgroundColor: BLUE,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ wipe({ direction: 'from-top-left' }) }
        />
        <TransitionSeries.Sequence durationInFrames={ 25 }>
          <AbsoluteFill
            style={ {
              backgroundColor: PINK,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ wipe({ direction: 'from-left' }) }
        />
        <TransitionSeries.Sequence durationInFrames={ 30 }>
          <AbsoluteFill
            style={ {
              backgroundColor: GREEN,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ circleWipe({ height, width }) }
        />

        <TransitionSeries.Sequence durationInFrames={ 30 }>
          <AbsoluteFill
            style={ {
              backgroundColor: PINK,
            } }
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          timing={ springTiming({ config: { damping: 200 }, durationInFrames: 20 }) }
          presentation={ clockWipe({ height, width }) }
        />

        <TransitionSeries.Sequence durationInFrames={ 105 }>
          <AbsoluteFill
            style={ {
              backgroundColor: ORANGE,
            } }
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  )
}
