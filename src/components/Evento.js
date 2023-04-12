import Button from "./eventos/Button";

function Evento(){
   
    function meuEvento() {
        console.log("Ativando o primeiro evento");
    }

    function segundoEvento(){
        console.log("Ativando segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento/*Função para executar depois do click*/} 
                    text="Primeiro evento"
            />
             <Button event={segundoEvento/*Função para executar depois do click*/} 
                    text="Segundo evento"
            />
        </div>
    );
}

export default Evento