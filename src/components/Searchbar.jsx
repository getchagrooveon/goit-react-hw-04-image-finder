import { useState } from 'react';

export const Searchbar = ({ submit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    submit(value);
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <header className="navbar navbar-light bg-light searchbar">
      <form className="form inline-block searchForm" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="btn btn-outline-success my-2 my-sm-0 searchForm-button"
        >
          Search
        </button>

        <input
          name="query"
          value={query}
          className="form-control"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
