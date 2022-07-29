import React, { useState } from "react"
import "./FeedCard.css"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../routes/Coordinator"
import TextsmsIcon from '@mui/icons-material/Textsms';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import { BASE_URL } from "../../constants/url";
import axios from "axios";


export const FeedCard = (props) => {
    const feed = props.feed
    const navigate = useNavigate()


  // Votando

  const ChangeVote = (id, escolha) => {
      const url = `${BASE_URL}/posts/${id}/votes`
      const token = localStorage.getItem("token")
      const body = {
        direction: escolha,
      }
      const header = {
          headers: {
              Authorization: token
          },
      }
      axios.put(url, body, header)
      .then((resp) =>{
        console.log(resp)
          alert("Votação Realizada!")
      })
      .catch((err) =>{
          console.log("Deu erro", err.response)
      })
  }

  const DeleteVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const token = localStorage.getItem("token")
    const header = {
          headers: {
              Authorization: token
          },
      }
      axios.delete(url, header)
      .then((resp) =>{
        console.log(resp)
          alert("Votação Apagada!")
      })
      .catch((err) =>{
          console.log("Deu erro", err.response)
      })
  }

//   manipulando votação

  const voteUp = () => {
    if (feed.userVote === 1) {
        DeleteVote(feed.id)
    } else {
        ChangeVote(feed.id, 1);
    }
  };

  const voteDown = () => {
    if (feed.userVote === -1) {
        DeleteVote(feed.id)
    } else {
        ChangeVote(feed.id, -1);
    }
  };

//  Mudando cor do icone 
    const iconBlue= {color: "blue"}
    const iconRed = {color: "red"}

    return (
            <div className="FeedCardContainer">
                <div className="FeedCardHeader">
                    <span>Enviado por: {feed.username}</span>
                </div>
                <div className="FeedCardMain">
                    <p>{feed.title}</p>
                </div>
                <div className="FeedCardFooter">
                    <div>
                      <p className="FeedCardFooterVoto">
                        <button className="FeedCardBotao" onClick={voteUp}>
                            {feed.userVote !== 1 ? <ThumbUpAltSharpIcon/> : <ThumbUpAltSharpIcon style={iconBlue}/>}</button>

                        {feed.voteSum !== null ? feed.voteSum : "0"}

                        <button className="FeedCardBotao" onClick={voteDown}>
                        {feed.userVote !== -1 ? <ThumbDownAltSharpIcon/> : <ThumbDownAltSharpIcon style={iconRed}/>}</button>
                    
                      </p>
                    </div>
                    <div>
                        <p className="FeedCardFooterMensagem" onClick={() => goToPostPage(navigate, feed.id)}>
                            <TextsmsIcon/>
                            {feed.commentCount !== null ? feed.commentCount : "0"}
                            </p>
                    </div>
                </div>
            </div>
    )
}