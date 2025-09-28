import ComicsList from "./comics/ComicsList"
import ShopContent from "./ShopContent"


// creo e esporto componente
const MyMainContent = () => {
    return (
        <main>
            <ComicsList />
            <ShopContent />
        </main>
    )
}

export default MyMainContent