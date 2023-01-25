import * as React from 'react'

const AccordionContext = React.createContext(null)

export const AccordionProvider = AccordionContext.Provider

function useAccordion() {
  const accordionInfo = React.useContext(AccordionContext)

  return accordionInfo
}

export default useAccordion
