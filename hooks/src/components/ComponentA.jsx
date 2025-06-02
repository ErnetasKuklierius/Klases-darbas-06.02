import React, { useState } from 'react'
import { ComponentC } from "./ComponentC"

export const ComponentA = ( { letterA, handleCDisplay, showC }) => {
  return (
<>
<div>{letterA}</div>
<button onClick={handleCDisplay}> Show letter C</button>
<ComponentC  letterC={showC}/>
</>
  )
}
