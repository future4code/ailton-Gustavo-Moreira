import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { LoginPage } from "../pages/LoginPage"
import { AdminHomePage } from "../pages/AdminHomePage"
import { CreateTripPage} from "../pages/CreateTripPage"
import { TripDetailsPage } from "../pages/TripDetailsPage"

export const Router = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="ListTrips" element={<ListTripsPage />} />
            <Route path="ApplicationForm" element={<ApplicationFormPage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="AdminHome" element={<AdminHomePage />} />
            <Route path="CreateTrip" element={<CreateTripPage />} />
            <Route path="TripDetails" element={<TripDetailsPage />} />
        </Routes>
    </BrowserRouter>
)
}