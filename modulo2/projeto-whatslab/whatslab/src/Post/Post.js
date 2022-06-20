import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
`;

const Linha1 = styled.p`
    margin-bottom: 0;
`

const Linha2 = styled.p`
    margin-top: 0;
    margin-left: 0.5rem;
`

class Post extends React.Component {

  render() {

    return (
        <PostContainer>
          <Linha1><strong>{this.props.nomeUsuario}</strong></Linha1>
          <Linha2>{this.props.mensagemUsuario}</Linha2>
        </PostContainer>
    );
  }
}

export default Post;