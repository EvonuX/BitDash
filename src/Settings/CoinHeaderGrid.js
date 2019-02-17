import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  position: absolute;
  top: -5px;
  right: -25px;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function({ name, symbol, topSection }) {
  return (
    <CoinHeaderGridStyled>
      <div> {name} </div>
      {topSection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol> {symbol} </CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}
