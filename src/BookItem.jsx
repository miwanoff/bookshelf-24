import Image from "./Image.jsx";

const BookItem = (props) => {
  console.log("props:");
  console.log(props);
  return (
    <div>
      <div className="card-title">
        <h4>{props.book.name}</h4>
      </div>
      <Image src={props.book.imageCover} />
      <button
        className="add_item btn btn-lg btn-warning"
        onClick={props.removeBook.bind(null, props.book)}
      >
        Delete
      </button>
    </div>
  );
};
export default BookItem;
