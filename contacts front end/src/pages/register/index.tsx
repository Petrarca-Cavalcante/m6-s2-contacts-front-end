import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { StyledRegister } from "./style"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { RotatingLines } from "react-loader-spinner"
import { LinkNavigation } from "../../components/LinkNavigation"

export interface iRegisterForm {
    email: string,
    password: string,
    name: string,
    telefone: string,
}

export const Register = () => {
    const { loadingButton, onSubmitLogin } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
            telefone: "",
        }
    })

    return (
        <StyledRegister>
            <div className="form-wrapper">
                <Title colorTitle="blue-1" type="Heading1">Registro</Title>
                <form action="submit" noValidate>
                    <Input
                        id="input-email"
                        labelName="Email"
                        type="text"
                        linkForm={register("email")}
                        placeholder="Digite seu email"
                        error={errors.email?.message}
                    />
                    <Input
                        id="input-password"
                        labelName="Sua senha"
                        type="password"
                        linkForm={register("password")}
                        placeholder="Digite sua senha"
                        error={errors.password?.message}
                    />
                    <Input 
                        id="input-name"
                        labelName="Nome"
                        type="text"
                        linkForm={register("name")}
                        placeholder="Digite seu nome"
                        error={errors.name?.message}
                    />
                    <Input 
                        id="input-number"
                        labelName="Telefone"
                        type="tel"
                        linkForm={register("telefone")}
                        placeholder="Digite seu telefone"
                        error={errors.telefone?.message}
                    />;
                    <Button type="submit" style="grey1" disabled={loadingButton}>
                        {loadingButton ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="30"
                                visible={true}
                            />
                        ) : (
                            "Registrar-se"
                        )}
                    </Button>
                </form>
                <p className="register-message">Já possui conta?</p>
                <LinkNavigation 
                linkTo="/login"
                style="icon"
                name="Entrar"
                />
            </div>
        </StyledRegister>
    )
}