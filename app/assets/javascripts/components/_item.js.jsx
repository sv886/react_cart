var Item = React.createClass({
  render() {
      return (
        <div>
          <h3>{this.props.item.name} {this.props.item.id}</h3>
          <p>{this.props.item.description}</p>
          <button onClick={this.props.handleDelete}>Delete</button>
          <button onClick={this.props.handleEdit}>Edit</button>
        </div>
      )
    }
});

// https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#Mt5oV8jfORSh4OhH.99
