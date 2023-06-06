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
    border: 2px solid red;
    height: 100px;
    width: 250px;
    margin-top: 10vh;
    margin-bottom: 15px;
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
  height: 35px;
  width: 35px;
  border-radius: 2em;
  background-color: #fff;
  border: 1px solid var(--color-blue-5);
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-contact-session p {
  flex: 1;
  text-align: center; 
  margin: 0; 
  font-weight: 600;
}

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    width: 250px;
    padding: 20px 0 0 0 ;
    background-color: var(--color-blue-5);
    border-radius: 1em;
    margin-bottom: 40px;
  }
  li {
    margin-bottom: 20px;
    height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 35px;
    background-color: var(--color-neutral-white);
    border-radius: .8em;
  }
`