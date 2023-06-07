import styled from "styled-components";


export const StyledAddContactModal = styled.main`
z-index: 1;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
background-color: var(--color-black-transparent);

.modal-card {
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 5px;
    padding-left: 35px;
    button {
        height: 20px;
        width: 35px;
        border-radius: 2em;
        background-color: #fff;
        border: 1px solid transparent;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
        margin-top: 10px;
    }
}
@media(min-width: 600px){
    .modal-card{
        width: 400px;
    }
}
`