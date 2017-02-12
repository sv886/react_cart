var Item = React.createClass({

  getInitialState() {
        return {editable: false}
    },

  handleEdit() {
      if(this.state.editable) {
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        console.log('in handleEdit', this.state.editable, name, description);
      }
      this.setState({editable: !this.state.editable})
    },

  render() {
      var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name} {this.props.item.id}</h3>
      var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <h3>{this.props.item.description}</h3>
      return (
        <div>
          {name}
          {description}
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        </div>
      )
    }
});

// https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#Mt5oV8jfORSh4OhH.99
