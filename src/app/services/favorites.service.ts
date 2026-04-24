import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteIds = signal<number[]>([]);

  favorites = computed(() => this.favoriteIds());

  toggleFavorite(id: number) {
    this.favoriteIds.update(ids => 
      ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]
    );
  }

  isFavorite(id: number) {
    return this.favoriteIds().includes(id);
  }
}
