import React from "react";
import styled from "styled-components";


const StyledErrorSign = styled.svg`
      position: relative;
      width: 30%;
      height: 30%;

    `

export default function ErrorSign(): JSX.Element {

    return <StyledErrorSign
        viewBox="0 0 100 100" y="0" x="0">
        <path fill="#e15b64"
              d="M69.863 19.947L50 39.81 30.137 19.946c-2.809-2.809-7.379-2.809-10.189 0s-2.809 7.38 0 10.189l19.863
              19.863-19.863 19.864c-2.809 2.809-2.809 7.38 0 10.189s7.379 2.809 10.189 0L50 60.188l19.863 19.863c2.809
              2.809 7.379 2.809 10.189 0s2.809-7.38 0-10.189L60.189 49.998l19.863-19.863c2.809-2.809 2.809-7.38
              0-10.189s-7.379-2.808-10.189.001z"
        />
    </StyledErrorSign>
}
