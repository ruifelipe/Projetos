/*comentario*/
/*
    -Componentes podem ser reutilizaveis em qualquer lugar do APP 
    -O componete <Frase/> 
*/
import Frase from "./Frases";

function HelloWorld(){
    
    return(
        <div>
            <Frase/>
            <h1>Hello World - Meu Primeiro Componete</h1>
            <Frase/>
        </div>
    );

}

export default HelloWorld;