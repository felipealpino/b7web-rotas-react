import React from 'react'
import {useHistory} from 'react-router-dom'


export default function Home () {

    let histoy = useHistory();

    function goToPaginaSobre(){
        setTimeout(() => {
            histoy.replace('/sobre');
        }, 1000);


    }

    return(<>
        <div>
            <p>Página Home</p> 

            <button onClick={goToPaginaSobre}>Ir para pagina sobre</button>
        </div>    
    </>)

}