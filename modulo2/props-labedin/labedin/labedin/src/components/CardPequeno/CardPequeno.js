import React from 'react';
import styled from 'styled-components';

const BoxPrincipal = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
    `
const AlinharImagem = styled.img `
    width: 50px;
    margin-right: 5px;
    border-radius: 50%;
    `
const TextoTitulo = styled.h4 `
    display: flex;
    margin-right: 5px;
    margin-left: 5px;
    `
const TextoDescricao = styled.div `
    display: flex;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <BoxPrincipal className="smallcard-container">
            <AlinharImagem src={ props.imagem } />
            <TextoDescricao>
                <TextoTitulo>{ props.titulo }</TextoTitulo>
                <p>{ props.descricao }</p>
            </TextoDescricao>
        </BoxPrincipal>
    )
}

export default CardPequeno;