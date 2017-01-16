// This component has only one method; render(). In this case, it’s used to
// return static html to the page. The render() method also triggers render() to
// all child components of the parent component, eventually printing all the
// components on the page. Each React component can only return one element, so
// all jsx elements in the return statement need to be in one wrapper div.

// Read more at https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#A16rPEf0Lc3Aeyoj.99

var Header = React.createClass({
  render() {
    return (

      <div>
        <h1>Shmello, Shmorld!</h1>
        <ol>
          <li>un</li>
          <li>da</li>
        </ol>
      </div>

    )
  }
});
