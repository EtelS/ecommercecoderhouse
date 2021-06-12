import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

//boton menos tiene que restar, div tiene que mostrar los valores por los que voy pasando, boton mas tiene que sumar
//menos se deshabilita en 1, mas se deshabilita en el maximo de mi stock
//agregar al carrito agrega una funcion

    const [cantidad, setCantidad] = useState(0)


    return ( 

        
            <>
                <button >-</button> 
                <div> {initial} </div> 
                <button>+</button> 
                <button
                    onClick= {()=>onAdd(initial) }
                >Agregar Al Carrito</button> 

            </>

     );
}
 
export default ItemCount;