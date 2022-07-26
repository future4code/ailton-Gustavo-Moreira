import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () =>{
    return (
      
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>}/>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/cadastro" element={<CadastroPage/>}/>
                <Route path="/post" element={<PostPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default Router