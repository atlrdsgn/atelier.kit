import type {Meta, StoryObj} from '@storybook/react'
import * as React from 'react'

import {Button} from '../button'
import {Toast, ToastHeading, ToastSubheading} from './toast'

const meta: Meta<typeof Toast> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'primitives/toast',
  component: Toast,
  tags: ['primitives', 'toast', 'docsPage'],
  argTypes: {
    swipeDirection: {
      control: {
        type: 'select',
        options: ['left', 'right'],
        defaultValue: 'right',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */

type CustomProps = {
  children?: React.ReactNode
}

const ForwardedToast = ({children}: CustomProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}>
        Set Open
      </Button>

      <Toast swipeDirection={'right'} open={open} onOpenChange={setOpen}>
        {children}
      </Toast>
    </>
  )
}

export const DefaultToast: Story = {
  render: () => (
    <>
      {/* <!-- 👇 The ToastHeading and ToastSubheading components are children of Toast. --> */}
      {/* <!-- For storybook we built a ForwardToast Component to pass useStates..
        /* The full component is below. --> */}

      <ForwardedToast>
        {/* <!-- <Toast swipeDirection={'right'}> --> */}
        <ToastHeading>Toast Title</ToastHeading>
        <ToastSubheading>Toast Description</ToastSubheading>
        {/* <!-- </Toast> --> */}
      </ForwardedToast>
    </>
  ),
}
