import { useState } from "react";


function Card () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Formulario enviado: Nombre ${name} Email:${email}, Mensaje:${message}`);
    }

    const updatedName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updateMessage = (e) => {
        setMessage(e.target.value);
    }


    return (
        <div className="card">
            <h2>Formulario</h2>
            <form action="/destino.html" onSubmit={onSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" id="name" onChange={updatedName} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" id="email" onChange={updateEmail}/>
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" id="message" onChange={updateMessage}></textarea>
                </label>
                <button className="send" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Card