import styled from "styled-components";

export const StyledHome = styled.main`
  min-height: 100vh;
  /* width: 100vw; */
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
    position: relative;
    left: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 30px;
    height: 100%;
    padding-top: 5px;
  }
  .user-container {
    z-index: 0;
    position: relative;
    left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user-card {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100px;
    min-width: 250px;
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
    overflow-x: auto;
  }
  li {
    width: 90%;
    min-height: 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 25px;
    margin-bottom: 15px;
    border-radius: .8em;
    background-color: var(--color-neutral-white);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  li p {
    overflow: hidden;
    max-width: 270px;
    word-break: break-all;
  }
    
  @media(min-width: 600px){
    .home-card {
      width: 400px;
    }
    .user-card{
      justify-content: center;
    }
    .logout-container {
      position: relative;
      left: 115px;
    }
  }
`