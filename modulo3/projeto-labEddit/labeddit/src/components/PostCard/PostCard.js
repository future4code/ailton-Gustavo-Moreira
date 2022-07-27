import React from "react"
import "./PostCard.css"
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

export const PostCard = (props) => {
    const comentario = props.comentario

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
                    <button className="FeedCardBotao"><ArrowUpwardSharpIcon/></button>
                    {comentario.voteSum !== null ? comentario.voteSum : "0"}
                    <button className="FeedCardBotao"><ArrowDownwardSharpIcon/></button>
                    </p>
                </div>
            </div>
    )
}