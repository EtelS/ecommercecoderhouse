import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';



const ItemListContainer = () => {
    const onAdd=(cantidad) =>{
        console.log('Agregar al carrito', cantidad);
    }

    return (  
        <>
        <ItemCount stock="5" 
                    initial="1"
                    onAdd={onAdd}/>

        <ItemList />
        </>
        
    );
}
 
export default ItemListContainer;