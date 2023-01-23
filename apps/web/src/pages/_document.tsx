import * as React from 'react'
import {Html, Head, Main, NextScript} from 'next/document'
import {getCssText, reset} from '@atlr/kit'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/cjy7bnb.css" />
        <style id={'stitches'} dangerouslySetInnerHTML={{__html: getCssAndReset()}} />
      </Head>
      <body style={{opacity: '1'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const getCssAndReset = () => {
  const css = getCssText()

  reset()
  return css
}
