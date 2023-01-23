/**
/// <reference types="resize-observer-browser" />
*/

import * as React from 'react'

import {useLayoutEffect} from './useLayoutEffect'

function useSize(element: HTMLElement | null) {
  const [size, setSize] = React.useState<{width: number; height: number} | undefined>(undefined)

  useLayoutEffect(() => {
    if (element) {
      // provide size as early as possible
      setSize({width: element.offsetWidth, height: element.offsetHeight})

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return
        }

        if (!entries.length) {
          return
        }

        const entry = entries[0]
        let width: number
        let height: number
        if ('borderBoxSize' in entry) {
          const borderSizeEntry = entry['borderBoxSize']
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry
          width = borderSize['inlineSize']
          height = borderSize['blockSize']
        } else {
          width = element.offsetWidth
          height = element.offsetHeight
        }

        setSize({width, height})
      })

      resizeObserver.observe(element, {box: 'border-box'})

      return () => resizeObserver.unobserve(element)
    } else {
      setSize(undefined)
    }
  }, [element])

  return size
}

export {useSize}
