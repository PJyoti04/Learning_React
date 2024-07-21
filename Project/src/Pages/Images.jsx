import React from 'react'
import { Image } from '@chakra-ui/react'
import './Images.css'

const Images = () => {
  return (
    <div className="hov" style={{margin:"8vw 2vw"}}>
        <Image
          borderRadius="full"
          boxSize="20vw"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <h1 style={{textAlign:"center",fontSize:"2.5vw",fontWeight:"500"}}>Shirts</h1>
    </div>
  )
}

export default Images