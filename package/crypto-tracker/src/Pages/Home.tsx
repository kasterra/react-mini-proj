/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { ICoin } from "../types/apiTypes";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 15px;
  color: ${(props) => props.theme.bgColor};
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in-out;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export const Home = () => {
  const { isLoading, data: coins } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {isLoading ? (
        "Loading"
      ) : (
        <CoinsList>
          {coins!.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={`${coin.id} image`}
                />
                {coin.name}&rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};
