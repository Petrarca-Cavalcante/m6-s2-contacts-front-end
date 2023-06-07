import styled from "styled-components"

export const StyledEditContactModal = styled.div`
z-index: 2;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
min-height: 100vh;
background-color: var(--color-black-transparent);

.modal-card {
    width: 300px;
    min-height: 415px;
    padding: 0 10px;
    border-radius: .8em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 20px;
    background-color: var(--color-neutral-white);
}
    .modal-header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 35px;
        margin: 15px 0;
        h2{
            position: relative;
            left: 10px;
        }
        .close-btn {
            width: 20px;
            height: 20px;
            position: relative;
            left: 35px;
            bottom: 15px;

        }
    }
    form  {
        display: flex;
        flex-direction: column;
        button{
            margin-top: 10px;
        }
    }
@media(min-width: 600px){
    .modal-card{
        width: 400px;
    }
    .modal-header{
        .close-btn {
        left: 80px;
        }
    }
    form {
        width: 90%;
    }
}
`