import { useState, useEffect } from "react";
import { Photo } from "../types";

const STORAGE_KEY = "unsplash_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<Photo[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      console.log("Loading from localStorage:", stored);
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log("Parsed favorites:", parsed);
        if (Array.isArray(parsed)) {
          // Ensure each photo has the required fields
          const validPhotos = parsed.filter(photo => 
            photo && 
            photo.id && 
            photo.urls && 
            photo.urls.small && 
            photo.urls.regular
          );
          setFavorites(validPhotos);
        }
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    try {
      // Only save the essential photo data
      const photosToSave = favorites.map(photo => ({
        id: photo.id,
        alt_description: photo.alt_description || '',
        urls: {
          small: photo.urls.small,
          regular: photo.urls.regular
        }
      }));
      console.log("Saving to localStorage:", photosToSave);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photosToSave));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  const add = (photo: Photo) => {
    console.log("Adding photo to favorites:", photo);
    if (!favorites.find((p) => p.id === photo.id)) {
      // Store only the essential photo data
      const photoToAdd = {
        id: photo.id,
        alt_description: photo.alt_description || '',
        urls: {
          small: photo.urls.small,
          regular: photo.urls.regular
        }
      };
      setFavorites([...favorites, photoToAdd]);
    }
  };

  const remove = (id: string) => {
    console.log("Removing photo from favorites:", id);
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  return { favorites, add, remove };
}
