import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "코알누" } });
  };

  return (
    <div className="wrap">
      <h2>{id}님 환영합니다</h2>
      <div className="count-wrap">
        <button className="decrease-btn" onClick={decrease}>
          -
        </button>
        <h1 className="count">{count}</h1>
        <button className="increase-btn" onClick={increase}>
          +
        </button>
      </div>
      <Box />
      <button className="login-btn" onClick={login}>
        login
      </button>
    </div>
  );
}

export default App;
