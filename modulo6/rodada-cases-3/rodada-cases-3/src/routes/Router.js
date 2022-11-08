import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    )
}