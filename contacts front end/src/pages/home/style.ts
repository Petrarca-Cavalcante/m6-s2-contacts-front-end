import styled from "styled-components";

export const StyledHome = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color-neutral-white);
  color: var(--color-neutral-black);
  
  #FiLogOut {
    width: 35px;
    height: 20px;
  }

  .logout-container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 30px;
    height: 100%;
    padding-top: 5px;
  }
  .user-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    padding-left: 60px;
    height: 100px;
    width: 250px;
    margin-top: 10vh;
    margin-bottom: 15px;
    background-color: var(--color-blue-5);
    border-radius: .8em;
  }

.add-contact-session {
  height: 40px;
  border-radius: .7em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-left: 35px;
  background-color: var(--color-blue-5);
}

.add-contact-btn {
  width: 35px;
  padding-right: 20px;
}

.add-contact-session p {
  flex: 1;
  text-align: center; 
  margin: 0; 
  font-weight: 500;
}

  ul {
    max-height: 355px;
    width: 250px;
    padding: 20px 10px 10px 10px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-blue-5);
    border-radius: 1em;
    margin-bottom: 20px;
    overflow: scroll;
  }
  li {
    width: 90%;
    min-height: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    border-radius: .8em;
    background-color: var(--color-neutral-white);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`