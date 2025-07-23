import { useEffect, useReducer } from "react";

type Action =
    | { type: "start" }
    | { type: "ten" }
    | { type: "minute" }
    | { type: "reset" }
    | { type: "hour" }
    | { type: "increment" };

type State = {
    count: number;
    boolean: boolean;
}

const initialState = {
    count: 0,
    boolean: false
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "start":
            return { ...state, boolean: !state.boolean };
        case "ten":
            return { ...state, count: state.count + 10 };
        case "minute":
            return { ...state, count: state.count + 60 };
        case "hour":
            return { ...state, count: state.count + 3600 };
        case "reset":
            return { count: 0, boolean: false, }
        case "increment":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const Timer = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.boolean && state.count === 0) {
            dispatch({ type: "start" });
            alert("時間になりました！！");
        }

        if (state.boolean) {
            const timer = setInterval(() => {
                dispatch({ type: "increment" })
            }, 1000);

            return () => clearInterval(timer);

        }

    }, [state.boolean, state.count]);




    return (
        <>
            <h2>Timer</h2>
            <div className="counter-box">
                <time>{formatTime(state.count)}</time>
            </div>
            <button className="counter-button" onClick={() => dispatch({ type: 'start' })}>{state.boolean ? "stop" : "start"}</button>
            <button className="counter-button" onClick={() => dispatch({ type: 'ten' })}>+10秒</button>
            <button className="counter-button" onClick={() => dispatch({ type: 'minute' })}>+1分</button>
            <button className="counter-button" onClick={() => dispatch({ type: 'hour' })}>+1時間</button>
            <button className="counter-button" onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </>
    )
}

export default Timer;