import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background-color:rgba(0 ,0 ,0 ,0.1);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:90;
`

const ModalArea = styled.div`
    background-color:white;
    padding:10px;
    border-radius:5px;
`

export default function Modal (props) { 

    function handleCloseModal(event){
        if(event.target === event.currentTarget){
            props.closeModal(false)
        }
    }


    return(<>
        {props.visible &&
            <ModalBackground onClick={handleCloseModal}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackground>
        }
    </>)
}