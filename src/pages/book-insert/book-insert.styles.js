import styled from "styled-components";

export const FromInsert = styled.form`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`

export const CardBook = styled.div`
  display: block;
  width: 500px;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  border-radius: 1rem;
  margin: 0 10px;
`

export const Box = styled.div`
  padding: 20px;
  
  h6{
    /*opacity: 0.6;*/
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 15px;
    color: #060b26;
    
    ${props => props.backgroundBlack && `
      /*opacity: 0.6;*/
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 15px;
      color: #FFFFFF;
    `}
  }
  
  input{
    border-radius: 1rem;
    border: none;
    height: 40px;
    text-indent: 5px;
    width: 80%;
    margin-bottom: 20px;
    
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }
  
  ${props => props.backgroundBlack && `
    background-color: #060b26;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  `}
`

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 1rem;
  border: none;
  background-color: #060b26;
  color: white;
  letter-spacing: 1px;
  font-size: 15px;
  margin: 0 0 20px 0;
  cursor: pointer;
  
  &:focus{
    outline: none;
    box-shadow: none;
  }
  
  ${props => props.reset &&`
    background-color: whitesmoke;
    border: 1px solid #060b26;
    color: #060b26;
    margin: 0 20px;
  `}
`