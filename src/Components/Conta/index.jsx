import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import {
  Icon,
  Box,
  Button,
  Saldo,
  Detalhe,
  IconeTema,
} from "../../Components/UI";

const IconMargin = styled(Icon)`
  margin-top: 2px/;
`;

const BoxTitle = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <BoxTitle>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe className="detalhe">R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </BoxTitle>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
