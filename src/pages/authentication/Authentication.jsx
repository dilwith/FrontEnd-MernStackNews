import { Button } from "../../components/Button/Button";
import { Input } from "../../components/input/input";
import { AuthContainer, Section } from "./AuthenticationStyled";

export function Authentication() {
    return <AuthContainer>
        <Section type="signin">
            <h2>Entrar</h2>
            <form >
                <Input type="email"
                placeholder= "E-mail"
                name= "email"
                />
               <Input type="password"
                placeholder= "Senha"
                name= "password"
                />
                <Button type="submit"
                text= "Entrar"
                />
            </form>
        </Section>
        <Section type="signup">
            <h2>Cadastrar</h2>
            <form >
                <Input type="Text" placeholder="Nome" name="name"></Input>
            <Input
            type="email"
            placeholder="E-mail"
            name="email"
            />
            <Input
            type="password"
            placeholder="Senha"
            name="password"
            />
            <Input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            />
            </form>
            <Button type="submit" text="Cadastrar" />
        </Section>
    </AuthContainer>
}

