import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0;
  width: 100%;
  label {
    color: var(--color-neutral-black);
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
  }
  input {
    width: 100%;
    height: 60px;
    background-color: var(--color-blue-6);
    color: var(--color-blue-1);
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 20px 15px;
    border-radius: 4px;
    border: 2px solid var(--color-blue-5);
  }
  input::placeholder {
    color: var(--color-blue-1);
  }
`;
