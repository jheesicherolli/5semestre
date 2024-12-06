import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Home } from "../pages/Home/Home"
import { Projeto } from "../pages/Projeto/Projeto"

//Route - não permite que seja chamada mais de uma rota por vez

    export const AppRouter = () => {
        return(
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/cadastro" exact element={<Cadastro />} />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="/blog" exact element={<Projeto />} />                
                </Routes>
            </Router>
        )
    }
