import React from 'react';
import { BrowserRouter, Link, Switch, Route,  Redirect} from 'react-router-dom'
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Categoria from './pages/Categoria'
import Login from './pages/Login';


const isLogged = false;

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
                            <Link to="/quem-somos">Quem somos? Vai te redirecionar para /sobre</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria?tipo=esportes">Esportes</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria?tipo=noticias">Noticias</Link>
                        </li>
                        
                        <li>
                            <Link to="/categoria?tipo=viagem">Viagem</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            
            <hr/>

            <Switch>
                {/* ROTA LOGIN */}
                <Route exact path="/login">
                    <Login/>
                </Route>



                {/* ROTA HOME */}
                <Route exact path="/">
                    <Home/>
                </Route>

                {/* ROTA SOBRE */}
                <Route exact path="/sobre">
                    {isLogged ? <Sobre/> : <Redirect to="/login"/>}
                </Route>

                {/* ROTA QUE REDIRECIONA PARA SOBRE */}
                <Route exact path="/quem-somos">
                    <Redirect to="/sobre"/>
                </Route>


                {/* ROTA CATEGORIA */}
                <Route path="/categoria">
                    <Categoria/>
                </Route>



                {/* ROTA 404 */}
                <Route path="*">
                    <h4 style={{color:'red'}}>Página não encontrada</h4>
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