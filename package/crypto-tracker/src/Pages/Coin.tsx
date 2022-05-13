import styled from "@emotion/styled";
import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { ICoinInfo, ICoinPriceData, RouteState } from "../types/apiTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 550px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  margin: 25px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  & svg {
    width: 30px;
    height: 30px;
  }
`;

const Coin = () => {
  const { state } = useLocation() as { state: RouteState };
  const { coinId } = useParams() as { coinId: string };
  const chartMatch = useMatch(":coinId/chart");
  const priceMatch = useMatch(":coinId/price");
  const { isLoading: infoLoading, data: infoData } = useQuery<ICoinInfo>(
    ["info", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ICoinPriceData>(["tickers", coinId], () =>
      fetchCoinTickers(coinId)
    );

  return (
    <Container>
      <Header>
        <BackBtn to="/">
          <FontAwesomeIcon icon={faHouse} />
        </BackBtn>
        <Title>
          {state?.name
            ? state.name
            : infoLoading
            ? "Loading..."
            : infoData?.name}
        </Title>
      </Header>

      <>
        {infoLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>Rank:</span>
                <span>{infoData!.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol:</span>
                <span>${infoData!.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Open Source:</span>
                <span>{infoData!.open_source ? "Yes" : "No"}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData!.description}</Description>
          </>
        )}
        {tickersLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
        )}
        <Tabs>
          <Tab isActive={!!chartMatch}>
            <Link to="chart">chart</Link>
          </Tab>
          <Tab isActive={!!priceMatch}>
            <Link to="price">price</Link>
          </Tab>
        </Tabs>
        <Outlet context={{ coinId }} />
      </>
    </Container>
  );
};

export default Coin;
