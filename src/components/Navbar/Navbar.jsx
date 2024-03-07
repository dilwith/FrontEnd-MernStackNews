import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from "../../images/logotipo.png"
import { ErrorSpan, ImageLogo,InputSpace, Nav } from "./navbarstyled"
import { useForm } from "react-hook-form"
import { z } from "zod" ;
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";

const searchSchema = z.object({
    title: z
    .string()
    .nonempty({message : "A pesquisa nao pode ser vazia"})
    .refine(value => !/^\s*$/.test(value),
    {message : "A pesquisa nao pode ter apenas espaços"})
})

export function Navbar(){
    const {register , handleSubmit , reset , formState: {errors}, } = useForm({
        resolver: zodResolver(searchSchema),
    })
    const navigate = useNavigate();

    function onSearch(data){
        const { title } = data
        navigate(`/search/${title}`)
        reset()
    }

    return(
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                        <input {...register("title")} 
                        type="text" 
                        placeholder="Pesquise por um título"/>
                    </InputSpace>
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Site de noticia Mern Stack Noticia" />
                </Link>
                <Link to="/auth">
                    <Button  type="button" text="Entrar">Entrar</Button>
                </Link>
                
                
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}


