import { Photo } from '../types';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { FC } from 'react';

interface Props { 
  photo: Photo; 
  isFav: boolean; 
  onToggleFav: (p: Photo) => void; 
}

export const PhotoItem: FC<Props> = ({ photo, isFav, onToggleFav }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02] duration-300">
    <img 
      src={photo.urls.small} 
      alt={photo.alt_description || 'photo'} 
      className="w-full h-64 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        className={`absolute bottom-4 right-4 p-2 rounded-full 
          ${isFav ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-white'} 
          transition-all duration-300 transform hover:scale-110`}
        onClick={() => onToggleFav(photo)}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        {isFav ? (
          <HeartFill className="w-5 h-5" />
        ) : (
          <Heart className="w-5 h-5" />
        )}
      </button>
    </div>
  </div>
);