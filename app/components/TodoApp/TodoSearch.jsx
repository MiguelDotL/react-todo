var React = require('react');


var TodoSearch = React.createClass({
      handleSearch: function() {
        var showCompleted = this.refs.showCompleted.value;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
      },

      render: function() {
        var {id, text} = this.props;

        return (
          <div>
            <div>
              <input  type="text"
                      ref="searchText"
                      placeholder="What do you want to look for?"
                      onChange={this.handleSearch}/>
            </div>
            <div>
              <lable>
                <input  type="checkbox"
                        ref="showCompleted"
                        onChange={this.handleSearch}/>
                &nbsp;  Show Completed Todos
              </lable>
            </div>
          </div>
        );
      }
    });

module.exports = TodoSearch;
