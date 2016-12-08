import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// var moment = require('moment');

var actions = require('actions');


export var Todo = React.createClass({

      render: function() {
        var { id,
              text,
              completed,
              createdAt,
              completedAt,
              dispatch  } = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
              message = 'Completed ';
              timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM-DD-YYYY, [at] HH:mm');
        };

        return (
          <div className={todoClassName} onClick={() => {
            // this.props.onToggle(id);
            dispatch(actions.toggleTodo(id));
          }}>
            <div>
              <input type="checkbox" checked={completed}/>
            </div>
            <div>
              <p className="todo__text">&nbsp; {text} &nbsp;</p>
              <p className="todo__subtext">&nbsp; {renderDate()}</p>
            </div>
          </div>
        );
      }
    });

    export default connect()(Todo);
