import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, increaseByAmount } from "./Reducer";

const Component = () => {
  const { count } = useSelector((state) => state.counter);
  const { arr } = useSelector((state) => state.counter);
  const [value, setValue] = useState();
  const len = arr.length;
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          if (count > 0) dispatch(decreaseCount());
          else alert("No negative");
        }}
      >
        -
      </button>
      <p>
        {count} + {len}
      </p>
      <button onClick={() => dispatch(increaseCount())}>+</button>
      <div>
        <input
          type="number"
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(increaseByAmount(value));
          }}
        >
          Increase by amount
        </button>
      </div>
    </div>
  );
};

export default Component;
