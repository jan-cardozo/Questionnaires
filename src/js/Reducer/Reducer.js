"use strict";

import { ADD_QUESTION } from "../Action/Types.js";
import { List } from "immutable";

const initialState = {
  questions: new List()
};

function* questionGenerator(){
  for (var i = 0; ; i++) {
    yield {
      id: i
    };
  }
}

export function reduce(state = initialState, action){
  let question = undefined;
  switch (action.type) {
    case ADD_QUESTION:
      question = questionGenerator();
      return state.questions.set(question.id, question);
    default:
      return state;
  }
}
