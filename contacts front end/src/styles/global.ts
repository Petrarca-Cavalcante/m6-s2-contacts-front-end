import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul{
    list-style-type: none;
  }

  body,html{
    height: 100%;
    scroll-behavior: smooth;
  }

  
:root {
 
  --color-blue-1: #111C31;
  --color-blue-2: #263F6D;
  --color-blue-3: #3A60A6 ;
  --color-blue-4: #6487C8;
  --color-blue-5: #A0B6DD;
  --color-blue-6: #D5DEF0;

  --color-gray-1: #212529;
  --color-gray-2: #343A40;
  --color-gray-3: #495057 ;
  --color-gray-4: #868E96;
  --color-gray-5: #ADB5BD;
  --color-gray-6: #CED4DA;
  --color-gray-7: #DEE2E6;
  --color-gray-8: #E9ECEF;
  --color-gray-9: #F1F3F5 ;
  --color-gray-10: #F8F9FA;
  --color-gray-11: #f2f2f2;

  --box-shadow-color: #00000090;

  --color-neutral-white: #ffffff;
  --color-neutral-black: #000000;

  --color-sucess: #168821;
  --color-negative: #ADB5BD;
  --color-negative-hover: #E60000;

  --color-black-transparent: #00000095
}

/* width of the entire scrollbar */
/* *::-webkit-scrollbar {
  width: 12px;            
} */

/* color of the tracking area */
/* *::-webkit-scrollbar-track {
  background: var(--color-blue-5);        
} */

/* color of the scroll thumb */
/* roundness of the scroll thumb */
/* creates padding around scroll thumb */
/* border-radius: 20px;
*::-webkit-scrollbar-thumb {
  background-color: var(--color-blue-2);   
  border: 3px solid var(--color-blue-5);  
} */

`;
