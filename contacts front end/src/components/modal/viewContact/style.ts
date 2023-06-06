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
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    padding-left: 35px;
    margin-bottom: 10px;
}
.modal-user-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    margin-top: 5px;
}
.modal-close-container {

}
.close-btn {
    width: 35px;
}

.modal-emails {
    max-height: 200px;
    overflow-y: scroll;
}
.modal-telefones {
    max-height: 200px;
    overflow-y: scroll;
}
`