import React, { useState } from 'react';
import { Folder, ArrowLeft, Image } from 'lucide-react';

// Landing Page Images
import Washtenaw from '../images/Washtenaw.png';
import BeausAnimalCareLanding from '../images/BeausAnimalCareLanding.png';
import AriaLanding from '../images/AriaLanding.png';

// Beau's Animal Care Images
import GraphicTwo from '../images/GraphicTwo.png';
import BeauAndHornbill from '../images/BeauAndHornbill.jpeg';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
import Marmoset from '../images/Marmoset.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';

// Voxxy Mobile V1 Screenshots
import VoxxyHomeScreen from '../images/voxxy-home-screen.png';
import VoxxyActivityCreation from '../images/voxxy-activity-creation.png';
import VoxxyPreferences from '../images/voxxy-preferences.png';
import VoxxyRecommendations from '../images/voxxy-recommendations.png';
import VoxxyMapView from '../images/voxxy-map-view.png';
import VoxxyCommunityFeed from '../images/voxxy-community-feed.png';

const FolderItem = ({ name, itemCount, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-window-border rounded-lg p-4 hover:border-terminal-green transition-colors text-left w-full"
    >
      <div className="flex items-center gap-3 mb-2">
        <Folder size={32} className="text-terminal-amber" />
        <div>
          <div className="text-terminal-green font-bold text-lg">{name}</div>
          <div className="text-gray-400 text-sm">{itemCount} images</div>
        </div>
      </div>
    </button>
  );
};

const ImageThumbnail = ({ src, alt, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-window-border rounded-lg overflow-hidden hover:border-terminal-green transition-colors aspect-square bg-window-bg-light"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </button>
  );
};

const ImagesWindow = () => {
  const [currentFolder, setCurrentFolder] = useState(null);

  const folders = {
    'voxxy-mobile': {
      name: 'Voxxy Mobile V1',
      images: [
        { src: VoxxyHomeScreen, alt: 'Voxxy Home Screen - Dashboard with activities and community feed' },
        { src: VoxxyActivityCreation, alt: 'Activity Creation - Multi-step modal interface' },
        { src: VoxxyPreferences, alt: 'Preference Collection - Cuisine and dietary requirements' },
        { src: VoxxyRecommendations, alt: 'AI Recommendations - Card view with venue details' },
        { src: VoxxyMapView, alt: 'Map View - Interactive map with venue markers' },
        { src: VoxxyCommunityFeed, alt: 'Community Feed - Friends favorite venues' },
      ]
    },
    'landing-page': {
      name: 'Landing Page Images',
      images: [
        { src: Washtenaw, alt: 'Washtenaw' },
        { src: BeausAnimalCareLanding, alt: "Beau's Animal Care Landing" },
        { src: AriaLanding, alt: 'Aria Landing' },
      ]
    },
    'animal-care': {
      name: "Beau's Animal Care Images",
      images: [
        { src: GraphicTwo, alt: 'Graphic Design' },
        { src: BeauAndHornbill, alt: 'Beau and Hornbill' },
        { src: BeauReykaMangoRu, alt: 'Beau with Reyka, Mango, and Ru' },
        { src: Marmoset, alt: 'Marmoset' },
        { src: BeauAndRu, alt: 'Beau and Ru' },
      ]
    }
  };

  const handleFolderClick = (folderId) => {
    setCurrentFolder(folderId);
  };

  const handleBackClick = () => {
    setCurrentFolder(null);
  };

  return (
    <div className="space-y-4">
      {/* Terminal header */}
      <div className="text-terminal-green text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-terminal-amber">beau@portfolio</span>
          <span className="text-window-text">:</span>
          <span className="text-terminal-blue">
            ~/images{currentFolder ? `/${folders[currentFolder].name.toLowerCase().replace(/\s+/g, '-')}` : ''}
          </span>
          <span className="text-window-text">$</span>
          <span className="ml-2">ls -la</span>
        </div>
      </div>

      {/* Back button when in a folder */}
      {currentFolder && (
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-terminal-green hover:text-terminal-green-dim transition-colors font-semibold"
        >
          <ArrowLeft size={18} />
          Back to Images
        </button>
      )}

      {/* Content */}
      {!currentFolder ? (
        // Show folders
        <div className="space-y-3">
          <FolderItem
            name="Voxxy Mobile V1"
            itemCount={folders['voxxy-mobile'].images.length}
            onClick={() => handleFolderClick('voxxy-mobile')}
          />
          <FolderItem
            name="Landing Page Images"
            itemCount={folders['landing-page'].images.length}
            onClick={() => handleFolderClick('landing-page')}
          />
          <FolderItem
            name="Beau's Animal Care Images"
            itemCount={folders['animal-care'].images.length}
            onClick={() => handleFolderClick('animal-care')}
          />
        </div>
      ) : (
        // Show images in selected folder
        <div>
          <div className="mb-4">
            <h3 className="text-terminal-green text-xl font-bold mb-2">
              {folders[currentFolder].name}
            </h3>
            <p className="text-gray-400 text-sm">
              {folders[currentFolder].images.length} images
            </p>
          </div>

          {folders[currentFolder].images.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {folders[currentFolder].images.map((image, i) => (
                <ImageThumbnail
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  onClick={() => window.open(image.src, '_blank')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <Image size={48} className="mx-auto mb-4 opacity-50" />
              <p>No images yet</p>
              <p className="text-sm mt-2">Add images to this folder to see them here</p>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">
          {currentFolder ? `${folders[currentFolder].images.length} files` : '3 directories'}
        </span>
      </div>
    </div>
  );
};

export default ImagesWindow;
