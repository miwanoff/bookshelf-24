import React from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import logo from "./logo.svg";
import BookItem from "./BookItem.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./Image.jsx";
import "./books.css";


// function Hello() {
//   return (
//     <div>
//       <h1 style={{ color: "red" }}>Hello, world!</h1>
//       <h2>{booksData[0].name}</h2>
//     </div>
//   );
// }

class Sum extends React.Component {
  render() {
    let sum = 0;
    this.props.goods.forEach((book) => {
      console.log(book.price);
      sum += +(book.price * book.count);
    });
    return <div> Суммарная стоимость: {sum.toFixed(2)} </div>;
  }
}

class Count extends React.Component {
  render() {
    let count = 0;
    this.props.goods.forEach((book) => {
      count += book.count;
    });
    return <div> Количество книг в корзине: {count} </div>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: booksData,
      cart: [],
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

  addBookToCart = (book) => {
    const goods = this.state.cart;
    if (!goods.includes(book)) goods.push(book);
    else book.count++;
    this.setState({
      cart: goods,
    });
  };

  deleteBookFromCart = (book) => {
    let goods;
    if (book.count === 1)
      goods = this.state.cart.filter((item) => item.id !== book.id);
    else
      goods = this.state.cart.filter((item) =>
        item.id === book.id ? book.count-- : book.count
      );
    this.setState({
      cart: goods,
    });
  };

  render() {
    return (
      <div>
        <Header className="container-fluid p-5 bg-dark text-primary text-center" />
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            {this.state.books.map((book) => {
              // console.log(book.id);
              return (
                <div className="col-sm-4 col-12" key={book.id}>
                  <div className="card text-center my-5 p-3">
                    <BookItem
                      book={book}
                      removeBook={this.removeBook}
                      addBookToCart={this.addBookToCart}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-fluid text-center">
          <h4>Кошик товарів</h4>
          <p>Кількість книг: {this.state.cart.length} </p>
          <ul className="list-group">
            {this.state.cart.map((book) => (
              <li key={book.id} className="list-group-item">
                <div className="row">
                  <div className="col-3">{book.name}</div>
                  <div className="col-3">{book.author}</div>
                  <div className="col-2">{book.price}</div>
                  <div className="col-1">{book.count}</div>
                  <div className="col-3">
                    <button
                      onClick={this.deleteBookFromCart.bind(this, book)}
                      type="button"
                      className="btn btn-outline-primary mt-auto mb-2"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="row">
                <div className="col-12">
                  <Count goods={this.state.cart} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Sum goods={this.state.cart} />
                </div>
              </div>
        </div>
      </div>
    );
  }
}

// function Image(props) {
//   return <img src={props.src} alt="logo" style={{ width: "150px" }} />;
// }

function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1 className="display-2">Книгарня</h1>
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<Hello />);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
