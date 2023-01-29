import {baseFace, monoFace, kitFace, pragFace} from './font.types'

export const kitFonts = {
  fonts: {
    system:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;",
    mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;",

    // baseKit..
    base: `${baseFace}, sans-serif`,
    monoMono: `'${monoFace}', monospace`,
    kit: `'${kitFace}', sans-serif`,
    prag: `'${pragFace}', sans-serif`,

    // Experimental..
    lateral: '"Lateral Extended Medium", sans-serif',
    roboto: '"Roboto", sans-serif',
  },
}
