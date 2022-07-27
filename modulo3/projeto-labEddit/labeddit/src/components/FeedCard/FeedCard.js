import React from "react"
import "./FeedCard.css"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../routes/Coordinator"
import TextsmsIcon from '@mui/icons-material/Textsms';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

export const FeedCard = (props) => {
    const navigate = useNavigate()
    const feed = props.feed

    return (
            <div className="FeedCardContainer" onClick={() => goToPostPage(navigate, feed.id)}>
                <div className="FeedCardHeader">
                    <span>Enviado por: {feed.username}</span>
                </div>
                <div className="FeedCardMain">
                    <p>{feed.title}</p>
                </div>
                <div className="FeedCardFooter">
                    <div>
                      <p className="FeedCardFooterVoto">
                        <button className="FeedCardBotao"><ArrowUpwardSharpIcon/></button>
                        {feed.voteSum !== null ? feed.voteSum : "0"}
                        <button className="FeedCardBotao"><ArrowDownwardSharpIcon/></button>
                      </p>
                    </div>
                    <div>
                        <p className="FeedCardFooterMensagem">
                            <TextsmsIcon />
                            {feed.commentCount !== null ? feed.commentCount : "0"}
                            </p>
                    </div>
                </div>
            </div>
    )
}