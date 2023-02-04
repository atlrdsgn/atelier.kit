import * as React from 'react'

const getTouchPosition = (event: React.TouchEvent<HTMLCanvasElement>) => {
  const canvas = event.target as HTMLCanvasElement
  var rect = canvas.getBoundingClientRect()
  return {
    x: ((event.touches[0].clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
    y: ((event.touches[0].clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
  }
}

export {getTouchPosition}
