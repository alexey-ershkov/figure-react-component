import React from 'react';
import Figure from "./components/Figure/Figure";
import styled from "styled-components";

const SRC = "https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"

const StyledApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 75vw;
  transform: translate(-50%, -50%);
`

function App() {
    return (
        <StyledApp>
            <Figure
                src={SRC}
                arWidth={16}
                arHeight={9}/>
        </StyledApp>
    );
}

export default App;
