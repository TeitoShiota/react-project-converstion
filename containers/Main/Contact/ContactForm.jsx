import DecoratorPrimary from "@/components/DecoratorPrimary";

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                            </svg>

export default function ContactForm() {

    
    // const form = document.querySelector("form");
    // form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
    event.preventDefault();
    const inputs = [
        ...event.target.querySelectorAll("input"),
        event.target.querySelector("textarea"),
    ];
    inputs.forEach((element) =>
        //   console.log(element)
        validate[element.name](element)
    );
    }

    const validate = {
    name: function (element) {
        if (element.value !== "") {
        element.classNameList.remove("input-error");
        element.nextElementSibling.classNameList.remove("error-message-show");
        element.nextElementSibling.innerText = "";
        return true;
        } else {
        element.classNameList.add("input-error");
        element.nextElementSibling.classNameList.add("error-message-show");
        element.nextElementSibling.innerText =
            "Feltet er tomt, skriv dit navn her.";
        }
    },
    email: function (element) {
        if (element.value === "") {
        element.classNameList.add("input-error");
        element.nextElementSibling.classNameList.add("error-message-show");
        element.nextElementSibling.innerText =
            "Feltet er tomt, skriv din e-mail her.";
        } else if (!element.value.includes("@") && !element.value.includes(".")) {
        element.classNameList.add("input-error");
        element.nextElementSibling.classNameList.add("error-message-show");
        element.nextElementSibling.innerText =
            "Dette er ikke en gyldig e-mail adresse, kontroller venligst igen.";
        } else {
        element.classNameList.remove("input-error");
        element.nextElementSibling.classNameList.remove("error-message-show");
        element.nextElementSibling.innerText = "";
        return true;
        }
    },
    message: function (element) {
        if (element.value !== "") {
        element.classNameList.remove("input-error");
        element.nextElementSibling.classNameList.remove("error-message-show");
        element.nextElementSibling.innerText = "";
        return true;
        } else {
        element.classNameList.add("input-error");
        element.nextElementSibling.classNameList.add("error-message-show");
        element.nextElementSibling.innerText =
            "Feltet er tomt, husk at skrive en besked til os.";
        }
    },
    };

    return (
        <form novalidate>
                <input placeholder="Navn" name="name" type="text" />
                    <p className="error-message"></p>
                <input placeholder="Email" name="email" type="email" />
                    <p className="error-message"></p>
                <textarea
                    placeholder="Besked"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
                <p className="error-message"></p>
                <button className="primary">
                    Send besked
                    <DecoratorPrimary />
                </button>
            </form>
    );
}