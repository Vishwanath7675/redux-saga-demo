import React from 'react';
import { connect } from 'react-redux';
const CounterOne = (props) => {
  return (
    <div>
      <h1>Count:{props.count}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: 'INC_S' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: 'DEC_S' });
        }}
      >
        Decrement
      </button>
      
    </div>
  );
};
export default connect((store) => {
  return store;
})(CounterOne);
