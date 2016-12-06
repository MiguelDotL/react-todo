var React = require('react');
var moment = require('moment');


var Todo = React.createClass({

      render: function() {
        var { id,
              text,
              completed,
              createdAt,
              completedAt } = this.props;

        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
              message = 'Completed ';
              timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM-DD-YYYY HH:mm');
        };

        return (
          <div onClick={ () => {
            this.props.onToggle(id);
          }}>
            <input type="checkbox" checked={completed}/>
            <p>&nbsp; {text}</p>
            <p>&nbsp; {renderDate()}</p>
          </div>
        );
      }
    });

module.exports = Todo;
