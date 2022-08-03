import { useEffect} from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const  {formState,onInputChange,email,username,password,onResetForm} = useForm({
        username:'',
        email:'',
        password:''        
    });

    // const {username,email,password} = formState;


    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
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

            <input 
                type="password" 
                className="form-control mb-2"
                placeholder="Contraseña"
                name="password"
                aria-label="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary">Reset</button>

            
        </>
    );
}
