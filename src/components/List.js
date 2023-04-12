import Item from "./Item";

function List(){
    return(
        <>
            <h1> Minha Lista </h1>
            <ul>
               <Item marca="Ferrari" ano_lançamento={1987}/>
               <Item marca="Bugatti" ano_lançamento={1985}/>
               <Item marca="Chevrolet" ano_lançamento={2000}/>
               <Item />
            </ul>
        </>
    );
}

export default List