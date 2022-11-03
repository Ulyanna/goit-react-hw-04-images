import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({webformatURL,tags,largeImageURL}) => {
  const [showModal, setShowModal] = useState(false);

const toggleShowModale = () => {
    setShowModal(prevState => (!prevState));
  };



  return (
      <>
         <li className={css.imageGalleryItem}>
              <img className={css.imageGalleryItemImage}
                src={webformatURL}
                alt={tags}
                onClick={toggleShowModale}
              />
            </li>
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={toggleShowModale}
          />
        )}
      </>
    );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
 
};
