import styled from "styled-components";
import {blackColor, whiteColor} from "../../constantes/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
`
export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    height: 16rem;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    background-color: white;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align:center;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    background-color: whitesmoke;
    padding-top: 2rem;
`
export const Header_Sidebar = styled.div`
    display: flex;
    align-content: center;
    align-self: center;
    padding-top: 2rem;
`
export const Select = styled.select`
    color: ${blackColor};
    width: 13.5rem;
    height: 2.8rem;
    border-radius: 4%;
    justify-content: center;
    align-self: center;
    background-color: ${whiteColor};
    border: none;
    border-radius: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
`
export const Main_Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-self: center;
    color: ${whiteColor};
    font-weight: bold;
`
export const Logo = styled.img`
    display: flex;
    align-content: center;
    align-self: center;
    color: ${whiteColor};
`
export const Footer_Sidebar = styled.span`
    display: flex;
    align-content: center;
    align-self: center;
    color: ${whiteColor};
    padding-bottom: 2rem;
`
export const Footer_Main = styled.span`
    display: flex;
    align-content: center;
    align-self: center;
    color: ${blackColor};
    padding-bottom: 2rem;
    padding-top: 2rem;
    font-size:smaller;
`
export const ButtonNumber = styled.button`
    color: ${blackColor};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: ${whiteColor};
    border: 2px solid black;
    font-family: 'Montserrat', sans-serif;
    margin: 15px 0px 0px 15px;
    font-weight: bold;
    padding-top: 1rem;
    padding-right: 1rem;
`
