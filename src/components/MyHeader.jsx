import Navbar from "./Navbar"

// creo e esporto componente
const MyHeader = () => {
    return (
        <header>
            <figure>
                <img src="/dc-logo.png" alt="logo" />
            </figure>
            <Navbar />
        </header>
    )
}

export default MyHeader