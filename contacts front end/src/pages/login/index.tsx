import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "./loginSchema"
import { StyledLogin } from "./style"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { RotatingLines } from "react-loader-spinner"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


export interface iLoginForm {
    email: string,
    password: string
}

export const Login = () => {

    const { loadingButton, onSubmitLogin } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iLoginForm>({
        mode: "onChange",
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <StyledLogin>
            <div className="form-wrapper">
                <Title colorTitle="blue-1" type="Heading1">Login</Title>
                <form action="submit" onSubmit={handleSubmit(onSubmitLogin)} noValidate>
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
                        labelName="Senha"
                        type="password"
                        linkForm={register("password")}
                        placeholder="Digite sua senha"
                        error={errors.password?.message}
                    />
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
                            "Entrar"
                        )}
                    </Button>
                </form>
            </div>
        </StyledLogin>
    )
}