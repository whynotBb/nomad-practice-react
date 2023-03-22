import { useEffect, useState } from "react";
function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((reponse) => reponse.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  //[]비워둘 경우, 페이지 열릴때 딱 1번 실행

  return (
    <div className="App">
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <div>
          {" "}
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
            {/* react 에서 map 은 element 에 key를 꼭 부여해주어야함(유니크하게) */}
          </select>
          <input type="text" />
          <button>change</button>
        </div>
      )}
    </div>
  );
}

export default App;
