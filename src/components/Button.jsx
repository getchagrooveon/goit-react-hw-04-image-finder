import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button
      className="btn btn-outline-success my-2 my-sm-0 button"
      onClick={onClick}
    >
      Load more ...
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
