// import "./App.css";
// // import CounterOne from "./components/CounterOne";
// // import CounterThree from "./components/CounterThree";
// // import CounterTwo from "./components/CounterTwo";
// import ComponentA from "./components/ComponentA";
// import { useReducer, createContext } from "react";
// import ComponentD from "./components/ComponentD";
// import ComponentF from "./components/ComponentF";

// export const CountContext = createContext();

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">
//         {/* <CounterOne />
//       <CounterTwo />
//       <CounterThree /> */}
//         count - {count}
//         <ComponentA />
//         <ComponentD />
//         <ComponentF />
//       </div>
//     </CountContext.Provider>
//   );
// }

// export default App;

import "./App.css";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

function App() {
  return (
    <div className="App">
      <DataFetchingOne />
      <DataFetchingTwo />
    </div>
  );
}

export default App;
