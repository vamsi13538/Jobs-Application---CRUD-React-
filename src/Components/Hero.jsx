import React from 'react'

const Hero = ({title="Want to be ", subtitle=" Developer !"}) => {
  return (
    <section className='mainHeading'>
        <div className='titleContainer'>
          <p className="mainTitle">{title}<span style={{color: 'black'}}>React</span>{subtitle}</p>
          <p className="subTitle">Find the React job that fits your skills and needs</p>
        </div >
    </section> 
  )
}

export default Hero