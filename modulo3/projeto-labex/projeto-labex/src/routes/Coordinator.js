export const voltar = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate, tripId) => {
    navigate(`/admin/trips/${tripId}`)
}