import React, { useState, useEffect } from 'react';
// Import your actual photos here - replace these paths with your real image paths
import BeauAndHornbill from '../images/BeauAndHornbill.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';
import BeauAndRalph from '../images/BeauAndRalph.JPG';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
import BeauReykaMango from '../images/BeauReykaMango.jpeg';
import BeauWithAbe from '../images/BeauWithAbe.jpeg';
import BeauTwoDogs from '../images/BeauTwoDogs.jpg'
import Marmoset from '../images/Marmoset.JPG'
import GraphicTwo from '../images/GraphicTwo.png'


const AnimalCareCarousel = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const photos = [
        {
            src: BeauReykaMangoRu,
        },
        {
            src: BeauAndHornbill,
        },
        {
            src: BeauTwoDogs,
        },
        {
            src: Marmoset,
        },
        {
            src: BeauAndRu,
        },
        {
            src: BeauWithAbe,
        },
        {
            src: BeauAndRalph,
        },
        {
            src: BeauReykaMango,
        },
        {
            src: GraphicTwo,
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoading) return;

        const interval = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isLoading, photos.length]);

    const goToSlide = (index) => {
        setCurrentPhotoIndex(index);
    };

    if (isLoading) {
        return (
            <div className="carousel-container loading">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading beautiful moments...</p>
                </div>
                <style jsx>{`
                    .carousel-container.loading {
                        height: 600px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 24px;
                        margin: 2rem auto;
                        max-width: 1000px;
                    }
                    .loading-spinner {
                        text-align: center;
                        color: white;
                    }
                    .spinner {
                        width: 50px;
                        height: 50px;
                        border: 4px solid rgba(255,255,255,0.3);
                        border-top: 4px solid white;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 1rem;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    const currentPhoto = photos[currentPhotoIndex];

    return (
        <div className="carousel-container">
            <div className="main-photo-container">
                <div className="photo-wrapper">
                    <img
                        src={currentPhoto.src}
                        alt={currentPhoto.caption}
                        className="main-photo"
                    />
                    <div className="photo-overlay">
                        <div className="photo-content">
                            <h3 className="photo-title">{currentPhoto.title}</h3>
                        </div>
                    </div>
                </div>


            </div>

            {/* Thumbnail navigation */}
            <div className="thumbnails-container">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={photo.src} alt='beau with animal' />
                        <div className="thumbnail-overlay">
                            <span className="thumbnail-emoji">{photo.animal}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${((currentPhotoIndex + 1) / photos.length) * 100}%` }}
                ></div>
            </div>

            <style jsx>{`
                .carousel-container {
                    max-width: 1000px;
                    margin: 1rem auto;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 24px;
                    padding: 1rem;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .main-photo-container {
                    position: relative;
                    height: 500px;
                    border-radius: 16px;
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
                }

                .photo-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .main-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .photo-wrapper:hover .main-photo {
                    transform: scale(1.05);
                }

                .photo-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(transparent, rgba(0,0,0,0.8));
                    padding: 3rem 2rem 2rem;
                    color: white;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: all 0.3s ease;
                }

                .photo-wrapper:hover .photo-overlay {
                    transform: translateY(0);
                    opacity: 1;
                }

                .photo-content {
                    text-align: center;
                }

                .animal-emoji {
                    font-size: 2.5rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .photo-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    letter-spacing: -0.025em;
                }

                .photo-caption {
                    font-size: 1rem;
                    margin: 0;
                    opacity: 0.9;
                    line-height: 1.5;
                }



                .thumbnails-container {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                }

                .thumbnail {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 3px solid transparent;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .thumbnail:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                }

                .thumbnail.active {
                    border-color: rgba(255, 255, 255, 0.8);
                    transform: translateY(-4px) scale(1.1);
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
                }

                .thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .thumbnail:hover img {
                    transform: scale(1.1);
                }

                .thumbnail-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .thumbnail:hover .thumbnail-overlay,
                .thumbnail.active .thumbnail-overlay {
                    opacity: 1;
                }

                .thumbnail-emoji {
                    font-size: 1.5rem;
                }

                .progress-bar {
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8));
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }

                @media (max-width: 768px) {


                    .main-photo-container {
                        height: 400px;
                    }

                    .photo-overlay {
                        padding: 2rem 1.5rem 1.5rem;
                        transform: translateY(0);
                        opacity: 1;
                        background: linear-gradient(transparent, rgba(0,0,0,0.9));
                    }

                    .animal-emoji {
                        font-size: 2rem;
                    }

                    .photo-title {
                        font-size: 1.5rem;
                    }

                    .photo-caption {
                        font-size: 0.9rem;
                    }



                    .thumbnail {
                        width: 60px;
                        height: 60px;
                    }

                    .thumbnails-container {
                        gap: 0.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .main-photo-container {
                        height: 300px;
                    }

                    .thumbnail {
                        width: 50px;
                        height: 50px;
                    }

                    .thumbnail-emoji {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AnimalCareCarousel;