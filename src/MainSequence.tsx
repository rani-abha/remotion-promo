import { springTiming, TransitionSeries } from '@remotion/transitions'
import { slide } from '@remotion/transitions/slide'
import { wheelspin } from './presentations/wheelspin'
import { NaNa1 } from './NaNa1'
import { BlueNa } from './BlueNa'
import { TextMask } from './TextMask'
import { Heygle } from './Heygle'
import { IDontWannaWork } from './IDontWannaWork'
import React from 'react'
import {
  AbsoluteFill,
  Img,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'


export const MainSequence = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  return (
    <TransitionSeries
      style={ {
        backgroundColor: 'white',
      } }
    >
      <TransitionSeries.Transition
        timing={ springTiming({ config: { damping: 200 }, durationInFrames: 6 }) }
        presentation={ wheelspin({ anchor: 'left' }) }
      />
      <TransitionSeries.Sequence durationInFrames={ 25 }>
        <Tile>
          <NaNa1 title='BROWSE' />
        </Tile>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={ springTiming({ config: { damping: 200 }, durationInFrames: 10 }) }
        presentation={ wheelspin({ anchor: 'top' }) }
      />
      <TransitionSeries.Sequence durationInFrames={ 25 }>
        <Tile>
          <BlueNa />
        </Tile>
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        timing={ springTiming({ config: { damping: 200 }, durationInFrames: 10 }) }
        presentation={ wheelspin({ anchor: 'left' }) }
      />
      <TransitionSeries.Sequence durationInFrames={ 55 }>
        <Tile>
          <IDontWannaWork />
        </Tile>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={ springTiming({ config: { damping: 200 }, durationInFrames: 10 }) }
        presentation={ slide({ direction: 'from-top' }) }
      />
      <TransitionSeries.Sequence durationInFrames={ 80 }>
        <Tile>
          <TextMask />
        </Tile>
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        timing={ springTiming({ config: { damping: 200 }, durationInFrames: 10 }) }
        presentation={ slide({ direction: 'from-top' }) }
      />
      <TransitionSeries.Sequence durationInFrames={ 160 }>
        {/* <Tile> */ }
        {/* <TextMask /> */ }
        <Heygle />
        {/* </Tile> */ }
      </TransitionSeries.Sequence>

    </TransitionSeries>
  )
}


const Tile: React.FC<{ children: React.ReactNode; noOverflow?: boolean }> = ({
  children,
  noOverflow,
}) => {
  return (
    <AbsoluteFill
      style={ {
        scale: '0.8',
        borderRadius: 50,
        overflow: noOverflow ? 'visible' : 'hidden',
      } }
    >
      { children }
    </AbsoluteFill>
  )
}
