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
const qGenerator = questionGenerator();

export const reduce = function (state = initialState, action){
  let question = undefined;
  switch (action.type) {
    case ADD_QUESTION:
      question = qGenerator.next().value;
      console.log(question);
      return {
        questions: state.questions.set(question.id, question)
      };
    default:
      return state;
  }
};
