import { useState } from "react";
import "./Imagegallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Imagegallery({ images }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setOpenModal(true);
    setSlideNumber(index);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handlePrev = () => {
    setSlideNumber((slideNumber - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setSlideNumber((slideNumber + 1) % images.length);
  };

  return (
    <div>
      {openModal && (
        <div className="modal">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btn-close"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="btn-left"
            onClick={handlePrev}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="btn-right"
            onClick={handleNext}
          />
          <div className="modal-content">
            <img
              src={images[slideNumber].url}
              alt={images[slideNumber].alt}
              className="modal-image"
            />
          </div>
        </div>
      )}

      <div className="gallery-container">
        {images &&
          images.map((image, index) => (
            <div
              className="gallery"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
      </div>
    </div>
  );
}
