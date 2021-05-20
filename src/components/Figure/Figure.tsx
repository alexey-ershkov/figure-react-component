import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import ErrorSign from "../ErrorSign/ErrorSign";


interface figureProps {
    src: string
    arWidth?: number
    arHeight?: number
    children?: React.ReactNode
}

interface styledFigureAttrs {
    arWidth: number
    arHeight: number
}

enum imageState {
    Loading,
    Success,
    Error
}

const StyledFigure = styled.figure<styledFigureAttrs>`
  position: relative;
  width: 100%;
  height: calc(100% * ${props => props.arHeight} / ${props => props.arWidth});
  margin: 0;
`

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

function Figure({src, arHeight = 9, arWidth = 16, children}: figureProps): JSX.Element {

    const [imgState, setImgState] = useState<imageState>(imageState.Loading)

    if (arHeight >= arWidth) {
        arHeight = 9
        arWidth = 16
        console.error("arWidth param must be bigger than arHeight param")
    }


    useEffect(() => {
        const image = new Image()
        image.src = src

        const loadedCallback = () => {
            setImgState(imageState.Success)
        }
        const errorCallback = () => {
            setImgState(imageState.Error)
        }

        image.addEventListener('load', loadedCallback)
        image.addEventListener('error', errorCallback)

        return () => {
            image.removeEventListener('load', loadedCallback)
            image.removeEventListener('error', errorCallback)
        }
    }, [src])


    if (imgState === imageState.Success) {

        return (
            <StyledFigure arWidth={arWidth} arHeight={arHeight}>
                <StyledImg src={src}/>
                {
                    children && <figcaption>{children}</figcaption>
                }
            </StyledFigure>
        )
    }

    if (imgState === imageState.Error) {
        return <ErrorSign/>
    }


    return (
        <Loader/>
    )
}


export default Figure
