"use strict";

import * as React from "react";

export default class Question extends React.Component {
  render(){
    return (<div className="panel panel-default">
      <div className="panel-body">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-1">
                <span className="glyphicon glyphicon-move"></span>
              </div>
              <div className="col-xs-8">Pregunta</div>
              <div className="col-xs-3">
                <button className="btn btn-default btn-xs" type="button">
                  <span className="glyphicon glyphicon-ok-circle"></span>
                </button>
                <button className="btn btn-default btn-xs" type="button">
                  <span className="glyphicon glyphicon-align-justify"></span>
                </button>
                <button className="btn btn-default btn-xs" type="button">
                  <span className="glyphicon glyphicon-option-vertical"></span>
                </button>
                <button className="btn btn-default btn-xs" type="button">
                  <span className="glyphicon glyphicon-remove"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="panel-body">Respuesta</div>
        </div>
      </div>
    </div>);
  }
}
