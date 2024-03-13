import DecoratorPrimary from "@/components/DecoratorPrimary";
import NextImg from "@/components/NextImg";

export default function Advert() {
    return (
        <section className="advert page-section">
            <div className="filter-whole advert-wrapper">
                <div className="advert-content">
                    <NextImg src="/images/andreas.jpg" alt="Klatre instruktøren Andreas" />
                    <div className="advert-text-container">
                        <h1>Tirsdags-klatring med Andreas</h1>
                        <p className="body-1">Andreas har været en aktiv klatrer i mange år. Kom og vær med når han deler ud af tips og tricks til at udfordre dig selv på klatrevæggen. To sjove timer hvor vi både klatrer, hygger os, får pulsen op og snakker om det nyeste klatre-gear.</p>
                        <p>Tirsdage kl. 17.30 - 19.30</p>
                        <a href="#" className="link primary"> Tilmeld dig her 
                            <DecoratorPrimary />
                        </a>
                    </div>
                </div>
                <hr className="colored-line" />
            </div>
        </section>
    );
}