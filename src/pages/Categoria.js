import React from 'react'
// import {useParams} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

//Hook customizado
function useQuery(){
    return new URLSearchParams( useLocation().search )
}


export default function Categoria () {
    let query = useQuery();

    //pegando valor do 'tipo' via get
    let cat = query.get('tipo')


    return(<>
        <div>
            Página Categoria
            Exibindo itens da categoria:  {cat} 
        </div>    
    </>)

}