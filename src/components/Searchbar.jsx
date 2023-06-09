import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({
      query: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    this.props.submit(value);
  };

  render() {
    return (
      <header className="navbar navbar-light bg-light searchbar">
        <form
          className="form inline-block searchForm"
          onSubmit={this.handleSubmit}
        >
          <button
            type="submit"
            className="btn btn-outline-success my-2 my-sm-0 searchForm-button"
          >
            Search
          </button>

          <input
            name="query"
            value={this.state.query}
            className="form-control"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
