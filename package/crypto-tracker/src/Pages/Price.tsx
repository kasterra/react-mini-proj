import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import { ICoinPriceData } from "../types/apiTypes";

const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CoinInfo = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  height: 60px;
  background-color: #bdc3c7;
  color: black;
  border-radius: 15px;
  padding-left: 10px;
`;

const Price = () => {
  const { coinId } = useOutletContext() as { coinId: string };
  const { isLoading, data } = useQuery<ICoinPriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId)
  );
  return isLoading ? (
    <span>Loading</span>
  ) : (
    <Cointainer>
      <CoinInfo>
        📊 percent change:(1h):{`${data?.quotes.USD.percent_change_1h}%`}
      </CoinInfo>
      <CoinInfo>
        📊 percent change:(12h):{`${data?.quotes.USD.percent_change_12h}%`}
      </CoinInfo>
      <CoinInfo>
        📊 percent change:(30m):{`${data?.quotes.USD.percent_change_30m}%`}
      </CoinInfo>
      <CoinInfo>💰price : {`$${data?.quotes.USD.price.toFixed(2)}`}</CoinInfo>
    </Cointainer>
  );
};
export default Price;
