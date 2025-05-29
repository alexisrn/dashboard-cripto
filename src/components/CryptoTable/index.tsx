// components/CryptoTable.tsx
"use client";

import React from "react";
import * as S from './styles';

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
}

interface CryptoTableProps {
  data: Crypto[];
  searchTerm: string;
}

const formatCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const CryptoTable: React.FC<CryptoTableProps> = ({ data, searchTerm }) => {
  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.Container>
      <S.TableWrapper>
        <S.StyledTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Moeda</th>
              <th>Preço</th>
              <th>24h</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.market_cap_rank}</td>
                <td>
                  <S.CoinName>
                    <img src={coin.image} alt={coin.name} />
                    <div>
                      <span>{coin.name}</span>
                      <small>{coin.symbol.toUpperCase()}</small>
                    </div>
                  </S.CoinName>
                </td>
                <td>{formatCurrency(coin.current_price)}</td>
                <S.PriceChange change={coin.price_change_percentage_24h}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </S.PriceChange>
                <td>{formatCurrency(coin.market_cap)}</td>
              </tr>
            ))}
          </tbody>
        </S.StyledTable>
      </S.TableWrapper>
    </S.Container>
  );
};

export default CryptoTable;
