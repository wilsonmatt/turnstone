// import React, { useContext } from 'react'
// import { TurnstoneContext } from '../context/turnstone'
// import escapeStringRegExp from 'escape-string-regexp'

// export default function ResultMatch(props) {
//   const { text } = props
//   const { customStyles, queryState } = useContext(TurnstoneContext)
//   const regex = new RegExp('(' + escapeStringRegExp(queryState) + ')', 'i')
//   const parts = text.split(regex)
//   const index = parts.findIndex(
//     (part) => part.toLowerCase() === queryState.toLowerCase()
//   )

//   parts[index] = (
//     <span className={customStyles.match} key={index}>
//       {parts[index]}
//     </span>
//   )

//   return <span>{parts}</span>
// }


import React, { useContext } from 'react'
import { TurnstoneContext } from '../context/turnstone'
import escapeStringRegExp from 'escape-string-regexp'

export default function MatchingText(props) {
  const { text } = props
  const { customStyles, queryState } = useContext(TurnstoneContext)
  const regex = new RegExp('(' + escapeStringRegExp(queryState) + ')', 'i')
  const parts = (queryState) ? text.split(regex) : [text]
  const matchingText = parts.map((part, index) => {
    const style = (part.toLowerCase() === queryState.toLowerCase()) ? 'match' : 'nonMatch'
    if(part.length)
      return (<span className={customStyles[style]} key={`part${index}`}>{parts[index]}</span>)
  })

  return <React.Fragment>{matchingText}</React.Fragment>
}
