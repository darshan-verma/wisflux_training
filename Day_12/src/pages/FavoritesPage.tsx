import { useFavorites } from "../hooks/userFavorites";
import { PhotoGrid } from "../components/PhotoGrid";
import { Photo } from "../types";
import { useEffect } from "react";

export const FavoritesPage = () => {
  const { favorites, remove } = useFavorites();

  useEffect(() => {
    console.log("Favorites data:", favorites);
  }, [favorites]);

  const handleRemoveFavorite = (photo: Photo) => {
    console.log("Removing favorite:", photo.id);
    remove(photo.id);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet. Add some photos to your favorites!</p>
      ) : (
        <PhotoGrid
          photos={favorites}
          favorites={favorites.map((p: Photo) => p.id)}
          onToggleFav={handleRemoveFavorite}
        />
      )}
    </div>
  );
};
