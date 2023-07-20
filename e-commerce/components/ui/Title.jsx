import React from 'react'

function Title({children,addProps}) {
  return (
    <div className={` tracking-wide  ${addProps}`} >{children}</div>
  )
}

export default Title