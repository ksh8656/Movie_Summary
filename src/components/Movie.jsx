
import React, { useState } from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='movie-container'>
            <img
                src={IMG_BASE_URL + poster_path}
                alt={title}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>

            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close-button' onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h5>영화 요약:</h5>
                        <p>{overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

