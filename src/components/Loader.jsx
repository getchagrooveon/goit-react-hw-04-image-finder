import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="overlay">
      <Audio
        height="480"
        width="480"
        radius="600"
        color="#198754"
        ariaLabel="loading"
      />
    </div>
  );
};
