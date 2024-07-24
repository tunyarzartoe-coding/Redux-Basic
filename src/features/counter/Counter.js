import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
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
    <div className="container" style={{}}>
      <section className="card">
        <div className="card-header">
          <h4>Redux Counter App</h4>
        </div>
        <div className="card-body">
          <button
            type="buttton"
            className="btn btn-outline-info count-display w-50 p-0"
          >
            {count}
          </button>
          <div className="button-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => dispatch(increment())}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(decrement())}
            >
              Sub
            </button>
          </div>
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="input-field w-100 text-center"
          />
          <div className="button-group d-flex">
            <button
              type="button"
              className="btn btn-danger"
              onClick={resetHandler}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => dispatch(incrementByAmount(addValue))}
            >
              Add by Amount
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
