import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'jesteban',
        email:'drummerestebanruiz@gmail.com'
    });

    const {username,email}=formState;

    const onInputChange = ({target}) =>{
        const {name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect(() => {
        // console.log('Email change');
    }, [email])
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                aria-label="username"
                value={username}
                onChange={onInputChange}
            />

            <input 
                type="email" 
                className="form-control mb-2"
                placeholder="example@email.com"
                name="email"
                aria-label="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'jesteban2') && <Message/>
            }
        </>
    );
}
