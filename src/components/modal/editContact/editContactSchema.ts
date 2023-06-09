import * as yup from "yup"

export const editContactSchema = yup.object().shape({
    email: yup.string().email("Email inválido"),
    name: yup.string(),
    number: yup.string()
})