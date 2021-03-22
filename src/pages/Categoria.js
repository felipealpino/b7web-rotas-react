import React from 'react'
import {useParams} from 'react-router-dom'

export default function Categoria () {

    let {cat} = useParams();

    return(<>
        <div>
            Página Categoria
            Exibindo itens da categoria:  {cat}
        </div>    
    </>)

}