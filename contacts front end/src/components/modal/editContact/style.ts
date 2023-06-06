import styled from "styled-components"

export const StyledEditContactModal = styled.div`
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
            bottom: 20px;
        }
    }
    form  {
        display: flex;
        flex-direction: column;
        button{
            margin-top: 10px;
        }
    }
`