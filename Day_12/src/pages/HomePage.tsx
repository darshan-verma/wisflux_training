import { searchPhotos } from "../api";
import { SearchBar } from "../components/SearchBar";
import { PhotoGrid } from "../components/PhotoGrid";
import { useFavorites } from "../hooks/userFavorites";
import { Photo } from "../types";
import { useState } from "react";

export const HomePage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState("");
  const { favorites, add, remove } = useFavorites();

  const onSearch = async (q: string) => {
    if (!q) return setPhotos([]);
    try {
      const res = await searchPhotos(q);
      setPhotos(res);
      setError(res.length ? "" : "No photos found");
    } catch {
      setError("Error fetching photos");
    }
  };

  const handleToggleFavorite = (photo: Photo) => {
    const isFavorite = favorites.some(f => f.id === photo.id);
    if (isFavorite) {
      remove(photo.id);
    } else {
      add(photo);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4">
      <SearchBar onSearch={onSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <PhotoGrid
        photos={photos}
        favorites={favorites.map((p: Photo) => p.id)}
        onToggleFav={handleToggleFavorite}
      />
    </div>
  );
};
