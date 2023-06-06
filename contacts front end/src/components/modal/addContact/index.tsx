import { useContext } from "react"
import { StyledAddContactModal } from "./style"
import { iNewContact } from "./type"
import { ServiceContext } from "../../../context/ServiceContext"
import { useForm } from "react-hook-form"
import { createContactSchema } from "./newContactSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../../Input"
import { Button } from "../../Button"
import { UserContext } from "../../../context/UserContext"


export const AddContactModal = () => {
    const { addContactModal, setAddContactModal, viewContactModal, setViewContactModal } = useContext(ServiceContext)
    const { onSubmitNewContact } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iNewContact>({
        mode: "onBlur",
        resolver: yupResolver(createContactSchema),
        defaultValues: {
            name: "",
            email: "",
            number: ""
        },
    });

    return (
        <>
            {addContactModal && (
                <StyledAddContactModal>
                    <div className="modal-card">
                        <div className="modal-header">
                            <button onClick={() => setAddContactModal(false)}>X</button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmitNewContact)} noValidate>
                            <Input
                                id="contact-name"
                                labelName="Nome do contato"
                                type="text"
                                linkForm={register("name")}
                                placeholder="Digite o nome do contato"
                                error={errors.name?.message}
                            />
                            <Input
                                id="contact-email"
                                labelName="Email do contato"
                                type="text"
                                linkForm={register("email")}
                                placeholder="Digite o email do contato"
                                error={errors.email?.message}
                            />
                            <Input
                                id="contact-number"
                                labelName="Número do contato"
                                type="text"
                                linkForm={register("number")}
                                placeholder="Digite o número do contato"
                                error={errors.number?.message}
                            />
                            <Button style="blueDark" type="submit">Salvar</Button>
                        </form>
                    </div>
                </StyledAddContactModal>
            )}
        </>
    )
}