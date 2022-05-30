import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/countSlice";
import Adder from "./Adder";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.value);

  return (
    <>
      <p>Current Count: {count}</p>
      <Adder add={() => dispatch(increment())} />
    </>
  );
};

export default Counter;

