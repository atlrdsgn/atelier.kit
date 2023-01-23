import {styled, VariantProps} from '../../theme'

const canvasBlurStyles = {
  zIndex: '18',
  backgroundColor: '$blur',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  saturate: '220%',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '100vh',
  margin: 'auto',
  padding: '0',
}

/**
 *
 *
 * Main canvas component
 */
const CanvasStyles = styled('div', {
  zIndex: 3,
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '0',

  variants: {
    blurred: {
      true: canvasBlurStyles,
    },

    /**
     *
     *
     * alignment && justification
     */
    align: {
      center: {
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: 'auto',
      },
      left: {},
      right: {},
    },
    justify: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        margin: 'auto',
      },
      start: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left',
        margin: 'auto',
      },
      end: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        textAlign: 'right',
        margin: 'auto',
      },
    },
  },
  defaultVariants: {
    blurred: false,
    align: 'center',
    justify: 'center',
  },
})

export const CanvasPrimitive = CanvasStyles
export type CanvasVariantProps = VariantProps<typeof CanvasStyles>
