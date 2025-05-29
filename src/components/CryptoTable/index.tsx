// components/CryptoTable.tsx
"use client";
import React, { useEffect, useState } from "react";
import * as S from './styles'
import axios from "axios";


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


const formatCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const CryptoTable: React.FC = () => {
  const [data, setData] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 30,
            page: 1,
            sparkline: false,
          },
        }
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
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
          {data.map((coin) => (
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
    </>
  );
};

export default CryptoTable;
