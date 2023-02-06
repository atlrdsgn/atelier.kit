// Note: Only loading vimeo to reduce the bundle size  https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player/vimeo'
import {css, styled} from '../../theme'

const HTML_TAG = 'video'

const videoPlayerStyles = css({
  all: 'unset',

  width: 'auto',
  height: 'auto',
})

export const StyledVideoPlayer = styled(ReactPlayer, videoPlayerStyles)

export const StyledVideoComponent = styled(HTML_TAG, videoPlayerStyles)
