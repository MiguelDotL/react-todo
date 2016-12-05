var React = require('react'),


    Todo = React.createClass({

      render: function() {
        var { id,
              text,
              completed } = this.props;

        return (
          <div onClick={ () => {
            this.props.onToggle(id);
          }}>
            <input type="checkbox" checked={completed}/>
            &nbsp; {text}
          </div>
        );
      }
    });

module.exports = Todo;
