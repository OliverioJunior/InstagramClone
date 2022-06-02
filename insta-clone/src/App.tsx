import { useState } from 'react'
import styled from 'styled-components'
import Button from './components/button'
import CenterDiv from './components/CenterDiv'


import DivSlide from './components/DivSlide'
import DivForm from './components/DivForm'
import DivForget from './components/DivForget'
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`


function App() {
 

  return (
    <Div className="App">
      <CenterDiv>
        <DivSlide>
        </DivSlide>
        <DivForm/>
      </CenterDiv>
      
    </Div>
        
     
  )
}

export default App
