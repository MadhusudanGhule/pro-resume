import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync } from '../redux/action/conterAction';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment Async</button>
    </div>
  );
};

export default Counter;
