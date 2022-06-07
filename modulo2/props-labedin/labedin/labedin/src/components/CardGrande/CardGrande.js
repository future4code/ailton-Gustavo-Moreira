import React from 'react';
import styled from 'styled-components';

const BoxPrincipal = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `
const AlinharImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
const TextoNome = styled.h4 `
    margin-bottom: 15px;
    `
const BoxSecundaria = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `

function CardGrande(props) {
    return (
        <BoxPrincipal className="bigcard-container">
            <AlinharImagem src={ props.imagem } />
            <BoxSecundaria>
                <TextoNome>{ props.nome }</TextoNome>
                <p>{ props.descricao }</p>
            </BoxSecundaria>
        </BoxPrincipal>
    )
}

export default CardGrande;