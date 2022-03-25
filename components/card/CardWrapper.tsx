import React from 'react';
import styled from 'styled-components'

interface CardWrapperProps{
    children: React.ReactElement[]
}
const CardWrapper:React.FC<CardWrapperProps> = ({children}) => {
  return (
      <Wrap> 
          <h3 className="title">Title Disney</h3>
          <div className="flex">
              { children}
          </div>

      </Wrap>
  )
}

export default CardWrapper

const Wrap = styled.div`
padding: 2rem 0;
 .title{
     padding: 0 2rem;
 }
    
    .flex{
        display:flex;
        padding: 2rem;
        margin : 0 2rem;
        overflow-y: hidden;
        overflow-x: auto;
    }
`