import {styled, VariantProps} from '../../theme'

const globalFooterStyles = {
  flexShrink: 0,
  width: '100%',
  height: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
  zIndex: 1,
  flex: '1 0 0px',
  position: 'relative',
  padding: '0px 0px 0px 0px',
  alignContent: 'center',
  flexWrap: 'nowrap',
  gap: 10,
  borderRadius: '0px 0px 0px 0px',
}

const styledFooter = styled('div', {
  ...globalFooterStyles,

  variants: {},
  defaultVariants: {},
})

export const StyledFooter = styledFooter
export type FooterVariantProps = VariantProps<typeof styledFooter>
