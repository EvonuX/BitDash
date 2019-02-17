import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinImage from "../Shared/CoinImage";
import { Tile } from "../Shared/Tile";

const SpotLightName = styled.h1`
  text-align: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList, currentFavorite }) => (
        <Tile>
          <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
