import * as yup from "yup";

export const createContactSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    name: yup.string().required("Nome é obrigatório"),
    number: yup.string().required("Telefone é obrigatório")
})