"use strict";

import * as React from "react";
import { Question } from "./Question.js";

export class Editor extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    return (<div className="row">
      <div className="col-xs-3">
        <div className="panel panel-default">
          <div className="panel-heading">Botones</div>
          <div className="panel-body">
            <button className="btn btn-default" onClick={this.props.onButtonClick}>Add Question</button>
          </div>
        </div>
      </div>
      <div className="col-xs-7">
        {this.props.questions.map((question) => {
          return <Question key={question.id} />;
        })}
      </div>
    </div>);
  }
}
