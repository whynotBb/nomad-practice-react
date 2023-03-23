import { useEffect, useState } from "react";

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState("");
  const [money, setMoney] = useState("");
  const [click, setClick] = useState(false);
  const [account, setAccount] = useState("");
  const onChange = (event) => {
    setCost(event.target.value);
  };
  const inputValue = (event) => {
    setMoney(event.target.value);
  };
  const onClick = () => {
    setAccount(money / cost);
    setClick(true);
    console.log(account);
  };

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
          <select onChange={onChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
            {/* react 에서 map 은 element 에 key를 꼭 부여해주어야함(유니크하게) */}
          </select>
          <div>
            <input type="text" placeholder="USD" onChange={inputValue} />
            <button onClick={onClick}>change</button>

            {click ? <p>You can get {account}coin</p> : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
