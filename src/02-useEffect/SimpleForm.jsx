import { useState, useEffect } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });

    };

    useEffect( () => {

    }, [] );

    useEffect( () => {

    }, [formState] );

    useEffect( () => {

    }, [ email ] );




  return (
    <>
        <h1 className="parpadea texth" >Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name='username' 
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            name='email' 
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === "strider2") && <Message />
        }

    </>
  );
}

