var React = require('react'),


    Todo = React.createClass({

      render: function() {
        var {id, text} = this.props;

        return (
          <div>
            {text}
          </div>
        );
      }
    });

module.exports = Todo;
