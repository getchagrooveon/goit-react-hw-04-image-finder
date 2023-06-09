import { Component } from 'react';
import propTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = event => {
    if (event.key === 'Escape') {
      this.props.offModal('');
    }
  };

  closeBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.offModal('');
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.closeBackdrop}>
        <div className="modal-img">
          <img src={this.props.url} alt={this.props.tag} width="1000" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: propTypes.string,
  tag: propTypes.string,
};
