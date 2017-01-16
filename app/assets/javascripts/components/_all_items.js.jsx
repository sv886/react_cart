// First, let’s start with listing all the items. Listing them will include making
// a request to the server to fetch all the items into our component using an AJAX
// request. We need to do it when the component gets rendered into the DOM. React
// has several built-in methods that handle different events during a component’s
// lifespan. There are methods that execute before and after component mounts into
// the DOM or before and after it dismounts from the DOM. In this case, we need a
// method that will handle the AJAX request when the component mounts. We’ll use
// componentDidMount(), which is called right after the component is mounted.
// 2 methods in this component.

var AllItems = React.createClass ({

  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  render() {

    var items = this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name} {item.id}</h3>
          <p>{item.description}</p>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    )
  }

});

// Functions and methods both are functions in JavaScript. A method is just a
// function which is a property of an object. React.createClass() in the above
// code is an example of function. componentDidMount() and render() in the
// above code work are methods.

// The map method is similar to the each method in the .erb templates. It
// iterates through the array of items and displays the items’ attributes using
// bracket notation. The brackets are equivalent to Rails’ <%= => tags. They’re
// used to inject the item attributes into the html, making it dynamic. It
// eventually returns the items variable, which now is a DOM element with item
// attributes wrapped in html elements.

// When we iterate through items in React, there must be a way to identify each
// item into the component’s DOM. For that, we’ll use a unique attribute of each
// item, also known as the "key". To add a key to the item, we need to use the
// key attribute in the div that wraps it.
