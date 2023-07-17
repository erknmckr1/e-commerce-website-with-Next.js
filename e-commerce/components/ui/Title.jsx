import React from 'react'

function Title({children,addProps}) {
  return (
    <div className={`font-bold ${addProps}`} >{children}</div>
  )
}

export default Title