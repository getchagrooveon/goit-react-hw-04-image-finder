import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';
import { getImages } from 'service/imageAPI';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [showBtn, setshowBtn] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');

  const changeState = query => {
    setQuery(query);
    setPage(1);
    setPictures([]);
    setshowBtn(false);
    setisLoading(false);
    setImageURL('');
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function update() {
      try {
        setisLoading(true);
        const { hits, totalHits } = await getImages(query, page);
        setPictures(prev => [...prev, ...hits]);
        setshowBtn(page < Math.ceil(totalHits / 15));
      } catch (error) {
        console.log(error.message);
      } finally {
        setisLoading(false);
      }
    }
    if (!query) {
      return;
    }
    update();
  }, [query, page]);

  const onModal = imageURL => {
    setImageURL(imageURL);
  };

  return (
    <div className="app">
      <Searchbar submit={changeState} />
      {Boolean(pictures.length) && (
        <ImageGallery>
          <ImageGalleryItem pictures={pictures} onClick={onModal} />
        </ImageGallery>
      )}
      {showBtn && <Button onClick={handleClick} />}
      {isLoading && <Loader />}
      {imageURL && <Modal offModal={onModal} url={imageURL} />}
    </div>
  );
};
