'use client';

import { useState } from "react";

// Components
import DecoratorPrimary from "@/components/DecoratorPrimary";


export default function ContactForm() {
    const [formState, setFormState] = useState({
        isValid: {
            name: false,
            email: false,
            message: false,
        },
        name: "",
        email: "",
        message: "",
    });
    
    function handleChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();


        const errors = {
            name: formState.name.length < 2,
            email: RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(formState.email) === false,
            message: formState.message.length < 10,
        };

        if (errors.name || errors.email || errors.message) {
            setFormState({...formState, isValid: {...errors}});
            console.log(formState);
            return;
        }

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
        <form noValidate onSubmit={handleSubmit}>
                <input placeholder="Navn" name="name" type="text" value={formState.name} onChange={handleChange}  />
                {formState.isValid.name && <p className="form-error-message">Not a valid name.</p>}
                

                <input placeholder="Email" name="email" type="email" value={formState.email} onChange={handleChange} />
                {formState.isValid.email && <p className="form-error-message">Not a valid email.</p>}


                <textarea
                    placeholder="Besked"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>
                {formState.isValid.message && <p className="form-error-message">Must be at least 10 characters long</p>}

                <button type="submit" className="primary">
                    Send besked
                    <DecoratorPrimary />
                </button>
            </form>
    );
}