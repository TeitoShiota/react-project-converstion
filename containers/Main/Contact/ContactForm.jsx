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
                </button>
            </form>
    );
}