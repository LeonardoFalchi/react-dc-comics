const dcComicsLinks = [
    { label: "Characters", href: "#" },
    { label: "Comics", href: "#" },
    { label: "Movies", href: "#" },
    { label: "TV", href: "#" },
    { label: "Games", href: "#" },
    { label: "Videos", href: "#" },
    { label: "News", href: "#" },
];

const dcLinks = [
    { label: "Terms Of Use", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Ad Choices", href: "#" },
    { label: "Advertising", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Subscriptions", href: "#" },
    { label: "Talent Workshops", href: "#" },
    { label: "CPSC Certificates", href: "#" },
    { label: "Ratings", href: "#" },
    { label: "Shop Help", href: "#" },
    { label: "Contact Us", href: "#" },
];

const sitesLinks = [
    { label: "DC", href: "#" },
    { label: "MAD Magazine", href: "#" },
    { label: "DC Kids", href: "#" },
    { label: "DC Universe", href: "#" },
    { label: "DC Power Visa", href: "#" },
];

const shopLinks = [
    { label: "Shop DC", href: "#" },
    { label: "Shop DC Collectibles", href: "#" },
];


const dcComicsLink = dcComicsLinks.map((dcComicsLink, index) => (
    <li key={"dccomics" + index}>
        <a href={dcComicsLink.href}>
            {dcComicsLink.label}
        </a>
    </li>
));

const dcLink = dcLinks.map((dcLink, index) => (
    <li key={"dc" + index}>
        <a href={dcLink.href}>
            {dcLink.label}
        </a>
    </li>
));

const sitesLink = sitesLinks.map((sitesLink, index) => (
    <li key={"sites" + index}>
        <a href={sitesLink.href}>
            {sitesLink.label}
        </a>
    </li>
));

const shopLink = shopLinks.map((shopLink, index) => (
    <li key={"shop" + index}>
        <a href={shopLink.href}>
            {shopLink.label}
        </a>
    </li>
));



// creo e esporto componente
const MyFooter = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-nav">

                    <div className="footer-col">
                        <h4>DC COMICS</h4>
                        <ul>
                            {dcComicsLink}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>DC</h4>
                        <ul>
                            {dcLink}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>SITES</h4>
                        <ul>
                            {sitesLink}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>SHOP</h4>
                        <ul>
                            {shopLink}
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-signup">
                        <button className="footer-signup-button">SIGN UP NOW!</button>
                    </div>

                    <div className="footer-social">
                        <span className="follow-us-text">FOLLOW US</span>
                        <div className="social-icons">
                            <img src="./src/assets/img/footer-facebook.png" alt="facebook icon" />
                            <img src="./src/assets/img/footer-twitter.png" alt="twitter icon" />
                            <img src="./src/assets/img/footer-youtube.png" alt="youtube icon" />
                            <img src="./src/assets/img/footer-pinterest.png" alt="pinterest icon" />
                            <img src="./src/assets/img/footer-periscope.png" alt="periscope icon" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default MyFooter