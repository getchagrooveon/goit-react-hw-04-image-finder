import { useEffect, useCallback } from 'react';
import propTypes from 'prop-types';

export const Modal = ({ url, offModal }) => {
  const closeByEsc = useCallback(
    event => {
      if (event.key === 'Escape') {
        offModal('');
      }
    },
    [offModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [closeByEsc]);

  const closeBackdrop = event => {
    if (event.target === event.currentTarget) {
      offModal('');
    }
  };

  return (
    <div className="overlay" onClick={closeBackdrop}>
      <div className="modal-img">
        <img src={url} alt="" width="900" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: propTypes.string,
  tag: propTypes.string,
};
