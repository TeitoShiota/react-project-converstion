'use client';

import { useState } from "react";

// Components
import DecoratorPrimary from "@/components/DecoratorPrimary";


export default function ContactForm() {
    const [formState, setFormState] = useState({
        isValid: true,
        name: "",
        email: "",
        message: "",
    });
    
    function handleChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (formValidator(formState)) {
            setFormState({...formState, isValid: true})
            console.log("Form is valid. Sending data to server.");
        } else {
            setFormState({...formState, isValid: false})
        }

        console.log(formState);
    }

    function formValidator(formState) {
        if (formState.name.length < 2) { return false; }

        if (RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(formState.email) === false) {
            return false;
        }
        
        if (formState.message.length < 10) { return false; }

        return true;
    };

    return (
        <form noValidate>
                <input placeholder="Navn" name="name" type="text" value={formState.name} onChange={handleChange} />
                <input placeholder="Email" name="email" type="email" value={formState.email} onChange={handleChange} />
                
                <textarea
                    placeholder="Besked"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>

                {!formState.isValid && <p>Form is invalid. Please check your inputs.</p>}

                <button type="submit" className="primary" onClick={handleSubmit}>
                    Send besked
                    <DecoratorPrimary />
                </button>
            </form>
    );
}