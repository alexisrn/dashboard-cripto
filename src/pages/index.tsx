

import { Header } from "@/components/layout/Header";
import { AboutHome } from "@/components/aboutHome";
import CryptoTable from "@/components/CryptoTable";
import { useEffect, useState } from "react";
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
  data: any[];
}

export default function Home() {
  const [data, setData] = useState<Crypto[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
  <div className="tech-grid">
      <Header  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     <AboutHome />
     <CryptoTable data={data}  searchTerm={searchTerm} />
     </div>
    </>
  );
}
