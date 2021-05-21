import React from 'react';
import Figure from "./components/Figure/Figure";
import styled from "styled-components";

const StyledApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 75vw;
  height: 75vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
    return (
        <StyledApp>
            <Figure
                src="https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006"
                arWidth={5}
                arHeight={3}
            >
                Автор: <a href="https://www.pexels.com/@simonmigaj">Simon Migaj</a>

            </Figure>
        </StyledApp>
    );
}

export default App;
