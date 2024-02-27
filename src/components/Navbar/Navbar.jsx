import { Outlet } from "react-router-dom"
import logo from "../../images/logotipo.png"
import { Button, ImageLogo,InputSpace, Nav } from "./navbarstyled"

export function Navbar(){
    return(
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" 
                    placeholder="Pesquise por um título"/>
                </InputSpace>

                <ImageLogo src={logo} alt="Logo Site de noticia Mern Stack Noticia" />
            
                <Button>Entrar</Button>
                
            </Nav>
            <Outlet />
        </>
    )
}


