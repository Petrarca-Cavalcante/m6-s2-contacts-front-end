import { useContext } from "react"
import { ServiceContext } from "../../../context/ServiceContext"
import { StyledViewContact } from "./style"
import { UserContext } from "../../../context/UserContext"
import { GrClose } from "react-icons/gr"
import { GoPencil } from "react-icons/go"
import { SlTrash } from "react-icons/sl"

export const ViewContactModal = () => {
    const { viewContactModal, setViewContactModal } = useContext(ServiceContext)
    const { viewContact, deleteContact } = useContext(UserContext)
    const { id, name, emails, telefones, createdAt } = viewContact

    const date = new Date(createdAt);

    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const ano = date.getFullYear().toString();

    const dataFormatada = `${dia}/${mes}/${ano}`;

    const handleModalClick = (event: any) => {
        event.stopPropagation();
    }

    return (
        <>
            {viewContactModal && (
                <StyledViewContact onClick={() => setViewContactModal(false)}>
                    <section className="modal-card" onClick={handleModalClick}>
                        <div className="modal-header">
                            <div className="modal-close-container">
                                <GrClose onClick={() => { setViewContactModal(false) }} className="close-btn btn" />
                            </div>
                            <div className="modal-user-container">
                                <h2>{name}</h2>
                                <p>Adicionado em: {dataFormatada}</p>
                            </div>
                            <div className="modal-edit-container">
                                <GoPencil className="edit-btn btn" />
                            </div>
                        </div>
                        <div className="modal-emails">
                            <h2>Email</h2>
                            <ul>
                                {emails.map((email, index) => (
                                    <li key={index}>{email}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-telefones">
                            <div>
                                <h2>Número</h2>
                            </div>
                            <ul>
                                {telefones.map((telefone, index) => (
                                    <li key={index}>{telefone}</li>
                                ))}
                            </ul>
                        </div>
                        <SlTrash className="delete-btn btn" onClick={() => deleteContact(id, name)}/>
                    </section>
                </StyledViewContact>
            )}
        </>
    )
}