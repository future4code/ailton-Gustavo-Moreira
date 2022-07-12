import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"


export const Router = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="ListTrips" element={<ListTripsPage />} />
            <Route path="ApplicationForm" element={<ApplicationFormPage />} />
    
        </Routes>
    </BrowserRouter>
)
}