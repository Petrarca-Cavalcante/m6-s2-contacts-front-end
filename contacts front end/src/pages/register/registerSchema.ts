import * as yup from "yup";

export const registerSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
    name: yup.string().required("Seu nome é obrigatório"),
    telefone: yup.string().required("Seu número é obrigatório")
})