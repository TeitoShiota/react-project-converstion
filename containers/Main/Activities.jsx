import Gallery from '@/containers/Main/Activities/Gallery';

export default function Activities() {
    return (
        <div id="aktiviteter" className="page-section duo-container">
            <Gallery />
            <section>
                <p className="text-uppercase">Aktiviteter</p>
                <h1>Karlstrup Klatrepark er aktiv livsstil for hele familien</h1>
                <p className="body-1">
                    Karlstrup Klatrepark tilbyder en aktiv livsstil for hele familien!
                    Udforsk vores varierede klatrebaner, skab minder og styrk familiens
                    bånd i naturen. Fra børnevenlige stier til udfordrende ruter - oplev
                    sammen i Karlstrup Klatrepark!
                </p>
                <a href="#" className="link primary"> Vores aktiviteter </a>
            </section>
        </div>
    );
}