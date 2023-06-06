import styled from "styled-components";

export const StyledViewContact = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
background-color: var(--color-black-transparent);

.modal-card {
    z-index: 1;
    margin: 0 15px;
    border-radius: .8em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 20px;
    background-color: var(--color-neutral-white);
}
.modal-header {
    height: 90px;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 10px;
}
.modal-user-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    gap: 5px;
    margin-top: 5px;
}
.modal-close-container, .modal-edit-container{
    width: 35px;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 1px solid;
}


.btn {
    width: 35px;
    height: 25px;
}
.delete-btn {
    align-self: flex-end;
}

ul {
    max-height: 200px;
    overflow-x: auto;
}


ul li {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
}


.edit-contact {
    width: 25px;
    height: 25px;
}
`