import { Component } from "react";

class SortPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }

  toggleChange = (e) => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    //this.state.isChecked = !this.state.isChecked;
    this.props.onUpdateSort(this.state.isChecked);
  };

  render() {
    return (
      <div className="form-check">
        <input
          type="checkbox"
          id="sort-by-name"
          className="form-control form-check-input mt-0"
          defaultChecked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        <label htmlFor="sort-by-name" className="form-check-label mt-2">
          Sort by name
        </label>
      </div>
    );
  }
}

export default SortPanel;
