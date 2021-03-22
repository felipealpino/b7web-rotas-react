import React from 'react';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom'
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Categoria from './pages/Categoria'


function App() {

    return(<> 
        <BrowserRouter>
            <header>
                <h1>
                    Meu site (Single Page Application)
                </h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria/esportes">Esportes</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria/noticias">Noticias</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria/viagens">Viagem</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            
            <hr/>

            <Switch>
                {/* ROTA HOME */}
                <Route exact path="/">
                    <Home/>
                </Route>

                {/* ROTA SOBRE */}
                <Route exact path="/sobre">
                    <Sobre/>
                </Route>

                {/* ROTA CATEGORIA */}
                <Route path="/categoria/:cat">
                    <Categoria/>
                </Route>


            </Switch>

            <hr/>

            <footer>
                Todos os direitos reservados.
            </footer>
        </BrowserRouter>
    </>)
}

export default App; 