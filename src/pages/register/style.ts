import styled from "styled-components";

export const StyledRegister = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 40px 10px;
  background-color: var(--color-neutral-white);
  color: var(--color-neutral-black);

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 415px;
    padding-top: 20px;
    color: var(--color-neutral-black);
    Button {
      height: 60px;
      margin-top: 10px;
      &:hover {
        background-color: var(--color-blue-4);
        color: var(--color-blue-1);
      }
    }
    Input {
      width: 100%;
    }
  }
  label {
    color: var(--color-gray-1);
  }

  button {
    background-color: var(--color-sucess);
  }

  .form-wrapper {
    padding: 2em;
    background-color: var(--color-gray-11);
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 5px 10px var(--box-shadow-color);
  }
  .register-message {
    margin-top: 15px;
  } 
`;
