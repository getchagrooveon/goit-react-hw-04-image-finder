import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';
import { getImages } from 'service/imageAPI';

export class App extends Component {
  state = {
    page: 1,
    pictures: [],
    showBtn: false,
    isEmpty: false,
    error: '',
    isLoading: false,
    imageURL: '',
  };

  changeState = query => {
    this.setState({
      query,
      page: 1,
      pictures: [],
      showBtn: false,
      isEmpty: false,
      error: '',
      isLoading: false,
      imageURL: '',
    });
  };

  handleClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await getImages(query, page);
        this.setState(prev => ({
          pictures: [...prev.pictures, ...hits],
          showBtn: page < Math.ceil(totalHits / 15),
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onModal = imageURL => {
    this.setState({ imageURL });
  };

  render() {
    const { pictures, showBtn, isLoading, imageURL } = this.state;
    return (
      <div className="app">
        <Searchbar submit={this.changeState} />
        {Boolean(pictures.length) && (
          <ImageGallery>
            <ImageGalleryItem pictures={pictures} onClick={this.onModal} />
          </ImageGallery>
        )}
        {showBtn && <Button onClick={this.handleClick} />}
        {isLoading && <Loader />}
        {imageURL && <Modal url={imageURL} offModal={this.onModal} />}
      </div>
    );
  }
}
