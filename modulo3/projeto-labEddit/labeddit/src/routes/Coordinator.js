export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToCadastroPage = (navigate) => {
    navigate("/cadastro")
}

export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToPostPage = (navigate, feedId) => {
    navigate(`/post/${feedId}/comments`)
}