import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {Container, VideoPlayer} from 'atlr.kit'

export const VideoPlayerDemo = () => {
  return (
    <>
      <Container size={'md'} align={'center'}>
        <ComponentName component={'Video Player'} />
      </Container>
      <VideoPlayer ratio={9 / 16} id={'76979871'} controls />
    </>
  )
}

/**
 *
 * https://player.vimeo.com/video/380921986
 */
