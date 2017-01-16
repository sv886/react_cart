// The ref attribute is used to reference the element in the component. Its
// function is similar to the name attribute in AngularJS. Instead of finding
// elements by id or by class, we do it by ref. In this particular case, the ref
// will be used to get the value of the text field and send it to the server.

// Let’s add an event handler. To do this, we need to slightly alter the html
// of the button. When we click the button the component will look for the
// handleClick() function. We must define it in the JavaScript file.

var NewItem = React.createClass ({

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
        url: 'api/v1/items',
        type: 'POST',
        data: { item: { name: name, description: description } },
        success: (item) => {
          this.props.handleSubmit(item);
        }
    });
  },

  render () {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }

});

// We send a POST request to the URL endpoint for the items using $.ajax . The
// response contains an object with the item’s name and description. Its
// callback prints the response from the server in the console. Try it out!
//
// Everything goes well, but there seems to be a problem: We have to restart
// the page in order to see the new item. How can we make this better? <NewItem />
// and <AllItems /> cannot communicate between each other because they’re on
// the same level. As we know, we can send data only down the component
// hierarchy. This means that we have to move the storing of the items of
// the <AllItems /> state to an upper layer; we must move it to the <Body /> component.
//
// Move getInitialState() and componentDidMount() from <Allitems /> to <Body />.
// Now, the items will be fetched when <Body /> is loaded. We can send variables
// down the children components with props. Props are immutable in the child and,
// in order to reach them, we need to use this.props. In our case, instead of
// using this.state.items, we’ll use this.props.items.
