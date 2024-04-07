import React from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import logo from "./logo.svg";
import BookItem from "./BookItem.jsx";

// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello, world!</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: booksData,
    };
  }

  removeBook = (book) => {
    const updateBooks = this.state.books.filter(function (item) {
      return item.id !== book.id;
    });
    console.log(updateBooks);
    this.setState({
      books: updateBooks,
    });
  };

  render() {
    return (
      <div>
        <Header className="header" />
        {this.state.books.map((book) => {
          console.log(book.id);
          return (
            <div key={book.id}>
              <BookItem book={book} removeBook={this.removeBook} />
            </div>
          );
        })}
      </div>
    );
  }
}

function Image(props) {
  return <img src={props.src} alt="logo" style={{ width: "150px" }} />;
}

function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Книжковий магазин</h1>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<Hello />);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
