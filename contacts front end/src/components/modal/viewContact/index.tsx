import { useContext } from "react"
import { ServiceContext } from "../../../context/ServiceContext"
import { StyledViewContact } from "./style"
import { GrClose } from "react-icons/gr"
import { UserContext } from "../../../context/UserContext"



export const ViewContactModal = () => {
    const { viewContactModal, setViewContactModal } = useContext(ServiceContext)
    const { viewContact } = useContext(UserContext)
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
                            <div className="modal-close-container"><GrClose onClick={() => { setViewContactModal(false)}} className="close-btn" /></div>
                            <div className="modal-user-container">
                                <h2>{name}</h2>
                                <p>Adicionado em: {dataFormatada}</p>
                            </div>
                        </div>
                        <div className="modal-emails">
                            <h2>Emails</h2>
                            <ul>
                                {emails.map((email) => (
                                    <li key={email}>{email}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-telefones">
                            <h2>Números</h2>
                            <ul>
                                {telefones.map((telefone) => (
                                    <li key={telefone}>{telefone}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </StyledViewContact>
            )}
        </>
    )
}