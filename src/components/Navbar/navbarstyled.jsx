import styled from "styled-components"

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    button {
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.5s;
    }
    button:hover {
        background-color: #757575;
        color: #f5f5f5;
    }

    input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
        &:focus {
        border: 1px solid #0bade3;
        }
    }
    
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem ;
    /*position: fixed;
    top: 0;*/
    background-color: white;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const ImageLogo = styled.img`
    width: 16.8rem;
    height: 5.5rem;
    object-fit: cover;
    cursor: pointer;
`
export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
`;

export const UserLoggedSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  gap: 1rem;

  h2 {
    font-size: 1.1rem;
    color: #0bade3;
    transition: all 0.3s;
    cursor: pointer;
  }

  h2:hover {
    color: #043546;
  }

  i {
    font-size: 1.5rem;
    color: #0bade3;
    cursor: pointer;
  }
  i:hover {
    color: #043546;
  }
`;