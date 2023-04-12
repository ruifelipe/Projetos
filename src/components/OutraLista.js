function OutraLista({ itens }){
    return(
        <>
            <h3>Lista de coisas boas </h3>
               
            {itens.length > 0 ? (
            itens.map((item, index) => (/* Como é retorno em JSX coloca parenteses */
                <p key={ index } > {item}</p>
            ))) : (
                <p> Não há itens na lista</p>
            )}
        </>
    );
}

export default OutraLista