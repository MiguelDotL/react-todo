var React = require('react');


var TodoSearch = React.createClass({
      handleSearch: function() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
      },

      render: function() {
        var {id, text} = this.props;

        return (
          <div className='container__header'>
            <div>
              <input  type="search"
                      ref="searchText"
                      placeholder="What do you want to look for?"
                      onChange={this.handleSearch}/>
            </div>
            <div>
              <label>
                <input  type="checkbox"
                        ref="showCompleted"
                        onChange={this.handleSearch}/>
                &nbsp;  Show Completed Todos
              </label>
            </div>
          </div>
        );
      }
    });

module.exports = TodoSearch;
