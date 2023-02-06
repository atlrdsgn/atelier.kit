import * as React from 'react'

import {ComponentName} from '@/components/ComponentName'
import {VideoPlayer} from 'atlr.kit'

export const VideoPlayerDemo = () => {
  return (
    <>
      <ComponentName component={'Video Player'} />

      <VideoPlayer ratio={9 / 16} id="380921986" controls />
    </>
  )
}

/**
 *
 * https://player.vimeo.com/video/380921986
 */
