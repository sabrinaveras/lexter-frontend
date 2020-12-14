import styled from "styled-components";

export const HomePage = styled.section`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  flex-wrap: wrap;
  max-width: 1440px;
  margin: auto;
`

export const Card = styled.div`
  width: 400px;
  max-width: 400px;
  height: 200px;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  border-radius: 1rem;

  display: flex;
  margin: 10px;
  
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  @media screen and (max-width: 380px){
    display: block;  
  }
`

export const Title = styled.div`
  width: 60%;
  background-color: #060b26;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 5px;
  
  h6{
    /*opacity: 0.6;*/
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 15px;
    color: #FFFFFF;
    margin-bottom: 30px;
  }
  
  h2{
    letter-spacing: 1px;
    font-size: 20px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 380px){
    width: 100%;
    height: 50%;
    border-radius: 1rem 1rem 0 0;
    padding-top: 15px;
    
    h6{
      margin-bottom: 15px;
    }
  }
`

export const Author = styled.div`
  width: 40%;
  /*background-color: #1a83ff;*/
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 5px;
  
  h6{
    opacity: 0.6;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 15px;
    color: #060b26;
    margin-bottom: 30px;
  }
  
  h2{
    letter-spacing: 1px;
    font-size: 20px;
    color: #060b26;
  }

  @media screen and (max-width: 380px){
    width: 100%;
    height: 50%;
    padding-bottom: 15px;
    
    h6{
      margin-bottom: 15px;
    }
  }
`
