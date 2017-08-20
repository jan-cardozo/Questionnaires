"use strict";

import "babel-polyfill";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reduce } from "./Reducer/Reducer.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { EditorContainer } from "./Container/EditorContainer.js";

let store = createStore(reduce);

ReactDOM.render(
  <Provider store={store}>
    <EditorContainer />
  </Provider>
  , document.getElementsByTagName("div")[0]);
