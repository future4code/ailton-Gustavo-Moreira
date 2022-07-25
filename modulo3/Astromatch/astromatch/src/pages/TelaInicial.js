import React from 'react'
import { ContainerMatches , DivMatches, DivPhoto, FooterMatches, HeaderMatches, MatchPhoto } from './Matchesestilo'
import axios from 'axios';
import { useState , useEffect } from 'react';


export default function Matches(props) {

    const [matchUser, setmatchUser] = useState([]);
    const [likedMatch, setlikedMatch] = useState([])

      useEffect(() => {
        GetProfileToChoose();
  }, []);
    
      const GetProfileToChoose = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo1/person"
      axios
        .get(url)
        .then((response) => {
          setmatchUser(response.data.profile);
        })
        .catch((error) => {
          console.log(error.response);
        });
      }
    
    const ChoosePerson = (liked) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo1/choose-person"
        const body = {
        choice: liked,
        id: matchUser.id,
      };
      axios
        .post(url, body)
        .then((resp) => {
            if (resp.data.isMatch === true) {
                setlikedMatch(resp.data.profile);
                console.log("Esse gostou: isMatch = ", resp.data.isMatch)
                GetProfileToChoose();
                console.log(likedMatch)
              } else {
                console.log("Esse não gostou: isMatch = ", resp.data.isMatch)
                GetProfileToChoose()
              }
        })
      }
    
      const ClickLike = () => {
        console.log("Clicou sim")
        ChoosePerson(true);
      };

      const Clear = () =>{
        const url ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gustavo/clear"
        
        axios
        .put(url)
        .then((resp) =>{
            alert("API apagada")
        })
        .catch((err) =>{
            console.log(err)
        })
      }

  return (
    <ContainerMatches>
        <DivMatches>
            <HeaderMatches>
                Astro Match
                <button onClick={props.goToMatches}>Matches</button>
            </HeaderMatches>
            <DivPhoto>
                <MatchPhoto src={matchUser.photo} />
                <p>{matchUser.name}, {matchUser.age}</p>
                <p>{matchUser.bio}</p>
            </DivPhoto>
            <FooterMatches>
                <button onClick={() => GetProfileToChoose()}>Dislike</button>
                <button onClick={ClickLike}>Like</button>
            </FooterMatches>
        </DivMatches>
        <button onClick={Clear}>Apagar</button>
    </ContainerMatches>
  )
}