import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
    display : 'block',
    margin : '12.5rem auto'
};

const Spinner = ({loading}) => {
  return (
    <ClipLoader 
        color = '#4338ca'
        loading = {loading}
        cssOverride = {override}
        size = {120}
    />
  )
}

export default Spinner