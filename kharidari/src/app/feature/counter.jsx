import React from "react";
import { increment, decrement } from "./counterSlice";
import {  useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>counter is {count}</div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </>
  );
}

export default Counter;
