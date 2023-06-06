import { useContext } from "react"
import { UserContext } from "../../../context/UserContext"
import { ServiceContext } from "../../../context/ServiceContext"
import { StyledEditContactModal } from "./style"
import { iEditContact } from "./type"
import { useForm } from "react-hook-form"
import { editContactSchema } from "./editContactSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../../Input"
import { Button } from "../../Button"
import { GrClose } from "react-icons/gr"

export const EditContactModal = () => {
    const { editContactModal, setEditContactModal, contactToUpdate, setContactToUpdate } = useContext(ServiceContext)
    const { updateContact } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iEditContact>({
        mode: "onBlur",
        resolver: yupResolver(editContactSchema),
        defaultValues: {
            name: "",
            email: "",
            telefone: ""
        },
    });

    const updateContactAjust = (data: iEditContact) => {
        let name: string = data.name
        let emails: string[] = [data.email]
        let telefones: string[] = [data.telefone]
        if (name === "") {
            name = contactToUpdate.name
        }
        if (emails[0] === "") {
            emails = contactToUpdate.emails
        }
        if (telefones[0] === "") {
            telefones = contactToUpdate.telefones
        } 
        const contactUpdateBody = {name, emails, telefones}
        updateContact(contactUpdateBody, contactToUpdate.id)
    }

    return (
        <>
            {editContactModal && (
                <StyledEditContactModal>
                    <section className="modal-card">
                        <div className="modal-header">
                            <h2>Editar contato</h2>
                            <GrClose onClick={() => setEditContactModal(false) } className="close-btn"/>
                        </div>
                        <form onSubmit={handleSubmit(updateContactAjust)} noValidate>
                            <Input
                                id="new-name"
                                labelName="Editar nove"
                                type="text"
                                linkForm={register("name")}
                                error={errors.name?.message}
                            />
                            <Input
                                id="new-email"
                                labelName="Editar email"
                                type="text"
                                linkForm={register("email")}
                                error={errors.email?.message}
                            />
                            <Input
                                id="new-telefone"
                                labelName="Editar telefone"
                                type="text"
                                linkForm={register("telefone")}
                                error={errors.telefone?.message}
                            />
                            <Button style="grey1" type="submit">Confirmar</Button>
                        </form>
                    </section>
                </StyledEditContactModal>
            )}
        </>
    )
}