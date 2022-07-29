import React from "react"
import "./PostCard.css"
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export const PostCard = (props) => {
    const comentario = props.comentario

    // Votando

  const ChangeCommentVote = (id, escolha) => {
    console.log("Deu boa")
    const url = `${BASE_URL}/comments/${id}/votes`
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

const DeleteComment = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
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
    if (comentario.userVote === 1) {
        DeleteComment(comentario.id)
    } else {
        ChangeCommentVote(comentario.id, 1);
    }
  };

  const voteDown = () => {
    if (comentario.userVote === -1) {
        DeleteComment(comentario.id)
    } else {
        ChangeCommentVote(comentario.id, -1);
    }
  };

  //  Mudando cor do icone 
  const iconBlue= {color: "blue"}
  const iconRed = {color: "red"}


    return (
            <div className="PostCardContainer">
                <div className="FeedCardHeader">
                    <span>Enviado por: {comentario.username}</span>
                </div>
                <div>
                    <p>{comentario.body}</p>
                </div>
                <div className="PostCardFooter">
                    <p className="FeedCardFooterVoto">
                    <button className="FeedCardBotao" onClick={voteUp}>
                            {comentario.userVote !== 1 ? <ThumbUpAltSharpIcon/> : <ThumbUpAltSharpIcon style={iconBlue}/>}</button>

                    {comentario.voteSum !== null ? comentario.voteSum : "0"}

                    <button className="FeedCardBotao" onClick={voteDown}>
                        {comentario.userVote !== -1 ? <ThumbDownAltSharpIcon/> : <ThumbDownAltSharpIcon style={iconRed}/>}</button>

                    </p>
                </div>
            </div>
    )
}