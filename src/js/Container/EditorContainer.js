"use strict";

import { addQuestion } from "../Action/Creator.js";
import { connect } from "react-redux";
import { Editor } from "../view/Editor.js";

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(addQuestion());
    }
  };
};

export const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
