import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = React.useState(0);


    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <h4>Counter</h4>
            <p>{count}</p>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>

                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    aria-label="Reset"
                    onClick={() => resetAll()}
                >
                    Reset
                </button>
                <br />
                <input
                    value={incrementAmount}
                    type="number"
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    aria-label="Increment by amount"
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
                >
                    Add Amount
                </button>

            </div>
        </section>

    );
}
export default Counter;