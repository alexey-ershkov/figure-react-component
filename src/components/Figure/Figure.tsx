import React, {useState, useEffect, useCallback} from "react";
import styled from "styled-components";
import Loader from "./Loader/Loader";
import ErrorSign from "./ErrorSign/ErrorSign";


interface figureProps {
    src: string
    arWidth?: number
    arHeight?: number
    children?: React.ReactNode
}

interface styledFigureAttrs {
    realHeight: number
}

enum imageLoadStates {
    Loading,
    Success,
    Error
}

const StyledFigure = styled.figure<styledFigureAttrs>`
  position: relative;
  width: 100%;
  height: ${props => props.realHeight}px;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

function Figure({src, arHeight = 9, arWidth = 16, children}: figureProps): JSX.Element {

    const [imgState, setImgState] = useState<imageLoadStates>(imageLoadStates.Loading)
    const [realWidth, setRealWidth] = useState<number>(0)


    useEffect(() => {
        const image = new Image()
        image.src = src

        const loadedCallback = () => {
            setImgState(imageLoadStates.Success)
        }
        const errorCallback = () => {
            setImgState(imageLoadStates.Error)
        }

        image.addEventListener('load', loadedCallback)
        image.addEventListener('error', errorCallback)

        return () => {
            image.removeEventListener('load', loadedCallback)
            image.removeEventListener('error', errorCallback)
        }
    }, [src])

    const figureRef = useCallback(figure => {
        if (figure) {
            setRealWidth(figure.getBoundingClientRect().width);
        }
    }, [])


    if (imgState === imageLoadStates.Success) {
        return (
            <StyledFigure ref={figureRef} realHeight={realWidth * arHeight / arWidth}>
                <StyledImg src={src}/>
                {
                    children && <figcaption>{children}</figcaption>
                }
            </StyledFigure>
        )
    }

    if (imgState === imageLoadStates.Error) {
        return (
            <StyledFigure ref={figureRef} realHeight={realWidth * arHeight / arWidth}>
                <ErrorSign/>
            </StyledFigure>
        )
    }


    return (
        <StyledFigure ref={figureRef} realHeight={realWidth * arHeight / arWidth}>
            <Loader/>
        </StyledFigure>
    )
}


export default Figure
