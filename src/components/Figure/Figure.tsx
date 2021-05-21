import React, {useState, useEffect, useCallback} from "react";
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
    realHeigth: number
}

enum imageState {
    Loading,
    Success,
    Error
}

const StyledFigure = styled.figure<styledFigureAttrs>`
  position: relative;
  width: 100%;
  height: ${props => props.realHeigth}px;
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

    const [imgState, setImgState] = useState<imageState>(imageState.Loading)
    const [realWidth, setRealWidth] = useState<number>(0)


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

    const hadleSizeChange = useCallback(figure => {
        if (figure !== null) {
            setRealWidth(figure.getBoundingClientRect().width);
        }
    }, [])


    if (imgState === imageState.Success) {
        return (
            <StyledFigure ref={hadleSizeChange} realHeigth={realWidth * arHeight / arWidth}>
                <StyledImg src={src}/>
                {
                    children && <figcaption>{children}</figcaption>
                }
            </StyledFigure>
        )
    }

    if (imgState === imageState.Error) {
        return (
            <StyledFigure ref={hadleSizeChange} realHeigth={realWidth * arHeight / arWidth}>
                <ErrorSign/>
            </StyledFigure>
        )
    }


    return (
        <StyledFigure ref={hadleSizeChange} realHeigth={realWidth * arHeight / arWidth}>
            <Loader/>
        </StyledFigure>
    )
}


export default Figure

