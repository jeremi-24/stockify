'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'immofind-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = window.localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error reading favorites from localStorage', error);
    }
  }, []);

  const saveFavorites = (newFavorites: string[]) => {
    try {
      setFavorites(newFavorites);
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  };

  const addFavorite = useCallback(
    (propertyId: string) => {
      saveFavorites([...favorites, propertyId]);
    },
    [favorites]
  );

  const removeFavorite = useCallback(
    (propertyId: string) => {
      saveFavorites(favorites.filter((id) => id !== propertyId));
    },
    [favorites]
  );

  const isFavorite = useCallback(
    (propertyId: string) => {
      return favorites.includes(propertyId);
    },
    [favorites]
  );

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
