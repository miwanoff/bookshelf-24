import React from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";

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

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Hello, world!</h1>
        {this.state.books.map((book) => {
          // console.log(book.id);
          return (
            <div key={book.id}>
              <p>{book.name}</p>
            </div>
          );
        })}

      </div>
    );
  }
}

// ReactDOM.createRoot(document.getElementById("root")).render(<Hello />);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
