import React, { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { PostCard } from "../../components/PostCard/PostCard";
import logo from "../../img/logo.jpeg";
import { goToLoginPage } from "../../routes/Coordinator";
import { goToFeedPage } from "../../routes/Coordinator";
import "./PostPage.css"
import { useForm } from "../../hooks/useForm";
import axios from "axios";

const PostPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const pathParams = useParams();

  // pegando os comentários
  const [comentarios, isLoading, error] = useRequestData(
    `${BASE_URL}/posts/${pathParams.id}/comments`
  );

  const getComentarios =
    comentarios &&
    comentarios.map((comentario) => {
      return <PostCard key={comentario.id} comentario={comentario} />;
    });

  console.log(getComentarios);

  // criando logout

  const limparlocalStorage = () => {
    localStorage.clear();
    alert("Logout realizado");
    goToLoginPage(navigate);
  };

  // Adicionando comentario 

  const { form, onChange, cleanFields } = useForm({ body: ""})

  const CreateComment = (event) => {
      console.log("Deu boa")
      event.preventDefault()
      const url = `${BASE_URL}/posts/${pathParams.id}/comments`
      const token = localStorage.getItem("token")
      const header = {
          headers: {
              Authorization: token
          },
      }
      axios.post(url, form, header)
      .then((resp) =>{
          cleanFields()
          alert("Comentario Criada!")
      })
      .catch((err) =>{
          console.log("Deu erro", err.response)
      })
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="PostPageContainer">
      <div className="PostPageHeader">
        <div>
          <button onClick={() => goToFeedPage(navigate)}>Voltar</button>
        </div>
        <div>
          <img src={logo} className="PostPageImage" />
        </div>
        <div>
          <button onClick={limparlocalStorage}>Logout</button>
        </div>
      </div>
      <div>
        
      </div>
      <div className="PostPageMainInput">
        <textarea
        name="body"
        className="FeedPageInput2"
        value={form.body}
        onChange={onChange}
        required
        placeholder="Adicionar Comentario"
        />

        <button 
        onClick={CreateComment}>Responder</button>
        
      </div>
      <div className="Alinhar">
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p className="Centralizar">{error.message}</p>}
        {!isLoading && comentarios && comentarios.length > 0 && getComentarios}
        {!isLoading && comentarios && comentarios.length === 0 && (
          <p className="Centralizar">Não há Comentários</p>
        )}
      </div>
    </div>
  );
};

export default PostPage;
