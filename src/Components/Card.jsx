import React from 'react'

const Card = ({bgClr="wheat", children}) => {
  return (
    <div className='card' style={{backgroundColor: `${bgClr}`}}>{children}</div>
  )
}

export default Card