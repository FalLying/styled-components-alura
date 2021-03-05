import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

const Button = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${(props) => (props.primary ? corPrimaria : "white")};
  background: ${(props) => (props.primary ? "white" : corPrimaria)};
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <LogoImage src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <Button primary href="https://google.com">
          Ajuda
        </Button>
        <Button href="https://google.com">Sair</Button>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
