import ContactForm from "@/containers/Main/Contact/ContactForm";

export default function Contact() {
    return (
        <section id="kontakt" className="contact page-section">
            <p className="contact-p text-uppercase bold">Kontakt os</p>
            <h1 className="contact-h1">Vil du spørge om noget?</h1>
            <p className="contact-p body-1">
            Vores dygtige medarbejdere sidder klar til at svare på dine spørgsmål,
            uanset om det drejer sig om sikkerhed, priser eller noget helt fjerde.
            </p>
            <ContactForm />
        </section>
    );
}