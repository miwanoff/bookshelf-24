import Image from "./Image.jsx";

const BookItem = (props) => {
  console.log("props:");
  console.log(props);
  return (
    <div>
      <div className="card-title">
        <h4>{props.book.name}</h4>
        <h5>{props.book.author}</h5>
      </div>
      <Image src={props.book.imageCover} />
      <button        
        onClick={props.removeBook.bind(null, props.book)} className="add_item btn btn-lg btn-warning">
        Delete
      </button>
      <button onClick={props.addBookToCart.bind(null, props.book)} className="btn btn-lg btn-primary mx-1" >Buy</button>

    </div>
  );
};
export default BookItem;
