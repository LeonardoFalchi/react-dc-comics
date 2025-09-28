
import BuyComicsDigital from '../assets/img/buy-comics-digital-comics.png';
import BuyComicsMerch from '../assets/img/buy-comics-merchandise.png';
import BuyComicsShop from '../assets/img/buy-comics-shop-locator.png';
import BuyComicsSub from '../assets/img/buy-comics-subscriptions.png';
import BuyDcVisa from '../assets/img/buy-dc-power-visa.svg';






const ShopContent = () => {
    return (

        <section id="icon-section">
            <div>
                <img src={BuyComicsDigital} alt="comics digital" />
                <span>DIGITAL COMICS</span>
            </div>
            <div>
                <img src={BuyComicsMerch} alt="comics merch" />
                <span>DC MERCHANDISE</span>
            </div>
            <div>
                <img src={BuyComicsSub} alt="comics subscription" />
                <span>SUBSCRIPTION</span>
            </div>
            <div>
                <img src={BuyComicsShop} alt="comics shop" />
                <span>COMIC SHOP LOCATOR</span>
            </div>
            <div>
                <img src={BuyDcVisa} alt="dc power visa" />
                <span>DC POWER VISA</span>
            </div>

        </section>
    )
}

export default ShopContent