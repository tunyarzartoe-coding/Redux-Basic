import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
import { reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;
  const resetHandler = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Sub
        </button>
      </div>

      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      /> 

      <div>
        <button onClick={resetHandler}>Reset</button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(addValue));
          }}
        >
          AddbyAmount
        </button>
      </div>
    </section>
  );
};

export default Counter;
