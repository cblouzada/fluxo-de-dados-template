import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = () => {
  return (
    <ContainerPostagem>
            <Image src={"https://picsum.photos/536/354"} alt='drone view'/>
            <Description>{'Lorem Ipsum'}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem