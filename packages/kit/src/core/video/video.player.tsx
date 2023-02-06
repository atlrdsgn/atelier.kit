import * as React from 'react'
import ReactPlayer from 'react-player/vimeo'
import {Portal} from '../portal'

import {BoxComponent} from '../box'
import type {baseElementProps} from '../@shared'
import {CSSWrapper} from '../utils/css-wrapper'
import {StyledVideoPlayer} from './video.styles'
import {Override} from '../utils/types'

// vimeo player src: https://player.vimeo.com/video/VIDEO_ID
// Read more: https://github.com/vimeo/player.js

const VIMEO_STRING = 'https://player.vimeo.com/video'

type videoProps = Override<
  React.ComponentPropsWithoutRef<typeof ReactPlayer>,
  {
    id?: string
    ratio?: number
    controls?: boolean
    loop?: boolean
  }
>

type VideoPrimitiveProps = baseElementProps & videoProps & React.HTMLAttributes<HTMLVideoElement>
type VideoProps = VideoPrimitiveProps

export const VideoPlayer = React.forwardRef<React.ElementRef<typeof StyledVideoPlayer>, VideoProps>(
  ({id, ratio = 9 / 16, controls = true, ...remainingProps}, forwardedRef) => (
    <Portal>
      <CSSWrapper css={{...remainingProps.css}}>
        <BoxComponent
          css={{
            borderRadius: 0,
            position: 'relative',
            paddingTop: `${ratio * 100}%`,
            overflow: 'hidden',
            // height: 0,
            height: 'auot',
            width: '100%',
          }}>
          <StyledVideoPlayer
            {...remainingProps}
            ref={forwardedRef}
            muted
            playsInline
            controls={controls}
            role={'figure'}
            url={`${VIMEO_STRING}/${id}`}
            height={'100%'}
            width={'100%'}
            css={{
              position: 'relative',
              // top: 0,
              //left: 0
            }}
          />
        </BoxComponent>
      </CSSWrapper>
    </Portal>
  )
)

VideoPlayer.displayName = 'VideoPlayer'
