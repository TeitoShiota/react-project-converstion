export default function Contact() {
    return (
        <section id="kontakt" class="contact page-section">
            <p class="contact-p text-uppercase bold">Kontakt os</p>
            <h1 class="contact-h1">Vil du spørge om noget?</h1>
            <p class="contact-p body-1">
            Vores dygtige medarbejdere sidder klar til at svare på dine spørgsmål,
            uanset om det drejer sig om sikkerhed, priser eller noget helt fjerde.
            </p>
            <form novalidate>
                <input placeholder="Navn" name="name" type="text" />
                    <p class="error-message"></p>
                <input placeholder="Email" name="email" type="email" />
                    <p class="error-message"></p>
                <textarea
                    placeholder="Besked"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
                <p class="error-message"></p>
                <button class="primary">
                    Send besked
                </button>
            </form>
        </section>
    );
}