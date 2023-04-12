import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [useEmail, setUseEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUseEmail(email)
    }

    function limparEmail() {
        setUseEmail('')
    }

    return (

        <div>

            <h2>Cadastre o seu Email: </h2>

            <form>
                <input type="email"
                    placeholder="Digite seu Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" onClick={enviarEmail} >
                    Enviar email
                </button>

                {useEmail && (
                    <div>
                        <p>
                            O e-mail do usuario é: {useEmail}
                        </p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                    /*Condicional tem que abrir as { }*/
                )}

            </form>

        </div>

    );
}

export default Condicional