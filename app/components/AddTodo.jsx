var React = require('react');


var Todo = React.createClass({

      handleSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
          this.refs.todoText.value = '';
          this.props.onAddTodo(todoText);
        } else {
          this.refs.todoText.focus();
        }
      },

      render: function() {
        var {id, text} = this.props;

        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" ref="todoText" placeholder="What do you need to do?" />
              <button className="button hollow expanded">
                Add Todo
              </button>
            </form>
          </div>
        );
      }
    });

module.exports = Todo;
