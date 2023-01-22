import React from 'react'
import styled from 'styled-components'

const SHeader = styled.header`
  width: 100%;
  height:  79px;
  color: #848484;
`
const SDate = styled.header`
  display: flex;
  align-items: center;
  p{
    margin: 0px 5px 0px 0px;
    font-size: 4rem;
    font-weight: 600;
  }
  span{
    font-size: 1.5rem;
    font-weight: 300;
  }
`

const SDateDay = styled.header`
  display: flex;
  text-align: right;
  width: 100%;
  span{
    display: flex;
    justify-content: right;
  }
`
export const Header = () => {
  return (
    <SHeader>
      <SDate>
        <p>07</p>
        <span>Jul <br/> 2021</span>
        <SDateDay><span> <br/> Wednesday</span></SDateDay>
      </SDate>
    </SHeader>
  )
}
