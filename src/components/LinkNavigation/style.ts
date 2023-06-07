import { Link } from "react-router-dom";
import styled from "styled-components";
import { iPropsLink } from "./type";

const switchStyleLink = (style: string) => {
  switch (style) {
    case "blueDark":
      return `
          color: var(--color-neutral-white);
          background-color: var(--color-blue-3);
          border: 2px solid var(--color-blue-3);
        
          &:hover {
            border: 2px solid var(--color-blue-2);
            background-color: var(--color-blue-2);
          }
        
          &:disabled {
            border: 2px solid var(--color-blue-1);
            background-color: var(--color-blue-1);
          }
          `;
      break;
    case "blueLight":
      return `
          color: var(--color-blue-1);
          background-color: var(--color-blue-6);
          border: 2px solid var(--color-blue-6);
        
          &:hover {
            border: 2px solid var(--color-blue-5);
            background-color: var(--color-blue-5);
          }
          `;
      break;
    case "icon":
      return `
          border: none;
          // background-color: var(--color-neutral-white);
          border-radius: 100%;
          padding: 10px 10px;
        
          &:hover {
            background-color: var(--color-gray-9);
            svg{
              color:var(--color-gray-4);
            }
          }
          svg {
            width: 2em;
            height: 2em;
            color:var(--color-gray-3);
          }
          `;
      break;
  }
};

export const StyledLink = styled(Link)<iPropsLink>`
  cursor: pointer;

  height: 35px;

  /* text-decoration: none; */

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  padding: 0px 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  transition: 500ms linear;

  ${({ variant }) => {
    return switchStyleLink(variant);
  }}

  @media (min-width: 1400px) {
    height: 60px;
    padding: 15px 20px;
  }
`;
