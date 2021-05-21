import styled from "styled-components";
import React from "react";

interface loaderProps {
    color?: string
}

const StyledSpinner = styled.svg`
      animation: rotate 1.5s linear infinite;
      position: relative;
      width: 20%;
      height: 20%;
      
      circle {
        stroke-dasharray: 75 25;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    `

export default function Loader({color = "#2196f3"}:loaderProps): JSX.Element {

    return <StyledSpinner viewBox="0 0 50 50">
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="2"
        />
    </StyledSpinner>
}

