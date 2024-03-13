import DecoratorPrimary from "@/components/DecoratorPrimary";
import NextImg from "@/components/NextImg";

export default function Trial() {
    return (
        <section id="prøv" className="page-section triple-container">
            <h2>Prøv at klatre!</h2>
            <p className="width-60 text-center body-1">
            Hvis du ikke har klatret før, kan det være en udfordring at komme i
            gang. Med vores klatre-pakker har du mulighed for at snuse til
            klatring, inden du investerer i udstyr eller melder dig på et
            klatrehold.
            </p>
            <div className="article-container">
                <article>
                    <NextImg src="/images/family.jpg" alt="En person der klatrer for første gang" />
                    <h3>Familie-klatring</h3>
                    <p className="body-1">
                    En sjov dag med klatre-aktiviteter for hele familien. I kan frit
                    benytte hele centret, og lade de mindste bruge klatre- og
                    legeområdet, mens far og mor kravler mod toppen på den store
                    klatrevæg.
                    </p>
                    <a href="#" className="link primary"> Bestil
                        <DecoratorPrimary />
                    </a>
                </article>
                <article>
                    <NextImg src="/images/junior.jpg" alt="" />
                    <h3>Junior-klatring</h3>
                    <p className="body-1">
                    Vores juniorklatrepakke er beregnet på mindre grupper og I får i
                    gruppen stillet en klatreinstruktør til rådighed i 45 minutter.
                    Herefter kan I klatre i parken i to timer på egen hånd.
                    </p>
                    <a href="#" className="link primary"> Bestil
                        <DecoratorPrimary />
                    </a>
                </article>
                <article>
                    <NextImg src="/images/children.jpg" alt="Børn der klatrer" />
                    <h3>Børne-klatring</h3>
                    <p className="body-1">
                    Er du klar på at holde en festlig børnefødselsdag i Karlstrup
                    Klatrepark? Børneklatrepakken giver fri adgang til vores klatre-
                    og legeområde i tre timer samt en plads i café-området til far og
                    mor.
                    </p>
                    <a href="#" className="link primary"> Bestil 
                        <DecoratorPrimary />
                    </a>
                </article>
            </div>
        </section>
    );
    }