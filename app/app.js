import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import Widget from "./widget";

const App = initialState => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Widget />
    </Provider>
  );
};

export default App;
