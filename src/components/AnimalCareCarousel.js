import React, { useState, useEffect } from 'react';
import BeauAndHornbill from '../images/BeauAndHornbill.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';
// import BeauAndRalph from '../images/BeauAndRalph.JPG';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
// import BeauReykaMango from '../images/BeauReykaMango.jpeg';
import BeauWithAbe from '../images/BeauWithAbe.jpeg';
import BeauTwoDogs from '../images/BeauTwoDogs.jpg';
import Marmoset from '../images/Marmoset.JPG';
// import GraphicTwo from '../images/GraphicTwo.png';

const AnimalCareCarousel = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const photos = [
        { src: BeauReykaMangoRu },
        { src: BeauAndHornbill },
        { src: BeauTwoDogs },
        { src: Marmoset },
        { src: BeauAndRu },
        { src: BeauWithAbe },
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

    const styles = {
        carouselContainer: {
            maxWidth: '1000px',
            margin: '1rem auto',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '24px',
            padding: '1rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        },
        loadingContainer: {
            height: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '24px',
            margin: '2rem auto',
            maxWidth: '1000px',
        },
        loadingSpinner: {
            textAlign: 'center',
            color: 'white',
        },
        spinner: {
            width: '50px',
            height: '50px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem',
        },
        mainPhotoContainer: {
            position: 'relative',
            height: '500px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1.5rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
        },
        photoWrapper: {
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        mainPhoto: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        photoOverlay: {
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '3rem 2rem 2rem',
            color: 'white',
            transform: 'translateY(20px)',
            opacity: '0',
            transition: 'all 0.3s ease',
        },
        photoContent: {
            textAlign: 'center',
        },
        photoTitle: {
            fontSize: '1.75rem',
            fontWeight: '700',
            margin: '0 0 0.5rem 0',
            letterSpacing: '-0.025em',
        },
        thumbnailsContainer: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
        },
        thumbnail: {
            position: 'relative',
            width: '80px',
            height: '80px',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '3px solid transparent',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        },
        thumbnailActive: {
            borderColor: 'rgba(255, 255, 255, 0.8)',
            transform: 'translateY(-4px) scale(1.1)',
            boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
        },
        thumbnailImg: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        thumbnailOverlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '0',
            transition: 'opacity 0.3s ease',
        },
        thumbnailEmoji: {
            fontSize: '1.5rem',
        },
        progressBar: {
            height: '4px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '2px',
            overflow: 'hidden',
        },
        progressFill: {
            height: '100%',
            background: 'linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.8))',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            width: `${((currentPhotoIndex + 1) / photos.length) * 100}%`,
        },
    };

    if (isLoading) {
        return (
            <>
                <div style={styles.loadingContainer}>
                    <div style={styles.loadingSpinner}>
                        <div style={styles.spinner}></div>
                        <p>Loading beautiful moments...</p>
                    </div>
                </div>
                <style>
                    {`
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}
                </style>
            </>
        );
    }

    const currentPhoto = photos[currentPhotoIndex];

    return (
        <>
            <div style={styles.carouselContainer}>
                <div style={styles.mainPhotoContainer}>
                    <div 
                        style={styles.photoWrapper}
                        onMouseEnter={(e) => {
                            const img = e.currentTarget.querySelector('img');
                            const overlay = e.currentTarget.querySelector('.photo-overlay');
                            if (img) img.style.transform = 'scale(1.05)';
                            if (overlay) {
                                overlay.style.transform = 'translateY(0)';
                                overlay.style.opacity = '1';
                            }
                        }}
                        onMouseLeave={(e) => {
                            const img = e.currentTarget.querySelector('img');
                            const overlay = e.currentTarget.querySelector('.photo-overlay');
                            if (img) img.style.transform = 'scale(1)';
                            if (overlay) {
                                overlay.style.transform = 'translateY(20px)';
                                overlay.style.opacity = '0';
                            }
                        }}
                    >
                        <img
                            src={currentPhoto.src}
                            alt={currentPhoto.caption}
                            style={styles.mainPhoto}
                        />
                        <div className="photo-overlay" style={styles.photoOverlay}>
                            <div style={styles.photoContent}>
                                <h3 style={styles.photoTitle}>{currentPhoto.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.thumbnailsContainer}>
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.thumbnail,
                                ...(index === currentPhotoIndex ? styles.thumbnailActive : {})
                            }}
                            onClick={() => goToSlide(index)}
                            onMouseEnter={(e) => {
                                if (index !== currentPhotoIndex) {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                                }
                                const img = e.currentTarget.querySelector('img');
                                const overlay = e.currentTarget.querySelector('.thumbnail-overlay');
                                if (img) img.style.transform = 'scale(1.1)';
                                if (overlay) overlay.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                if (index !== currentPhotoIndex) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                                }
                                const img = e.currentTarget.querySelector('img');
                                const overlay = e.currentTarget.querySelector('.thumbnail-overlay');
                                if (img) img.style.transform = 'scale(1)';
                                if (overlay && index !== currentPhotoIndex) overlay.style.opacity = '0';
                            }}
                        >
                            <img src={photo.src} alt='beau with animal' style={styles.thumbnailImg} />
                            <div className="thumbnail-overlay" style={styles.thumbnailOverlay}>
                                <span style={styles.thumbnailEmoji}>{photo.animal}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                </div>
            </div>

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    @media (max-width: 768px) {
                        .carousel-container {
                            padding: 0.5rem;
                        }
                        
                        .main-photo-container {
                            height: 400px !important;
                        }
                        
                        .thumbnail {
                            width: 60px !important;
                            height: 60px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .main-photo-container {
                            height: 300px !important;
                        }
                        
                        .thumbnail {
                            width: 50px !important;
                            height: 50px !important;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default AnimalCareCarousel;