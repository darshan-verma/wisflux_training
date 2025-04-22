import { FC } from "react";
import { Photo } from "../types";
import { PhotoItem } from "./PhotoItem";

interface Props {
  photos: Photo[];
  favorites: string[];
  onToggleFav: (p: Photo) => void;
}

export const PhotoGrid: FC<Props> = ({ photos, favorites, onToggleFav }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {photos.length === 0 ? (
      <div className="col-span-full text-center text-gray-500 py-12">
        Start searching to discover amazing photos!
      </div>
    ) : (
      photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          isFav={favorites.includes(photo.id)}
          onToggleFav={onToggleFav}
        />
      ))
    )}
  </div>
);
