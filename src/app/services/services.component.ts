import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritesService } from './favorites.service';

interface PetService {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  private favoritesService = inject(FavoritesService);
  
  searchTerm: string = '';
  selectedCategory: string = 'Todos';
  
  // Contact state
  contactName: string = '';
  contactEmail: string = '';
  contactMessage: string = '';
  isSubmitted: boolean = false;

  categories: string[] = ['Todos', 'Salud', 'Estética', 'Educación', 'Hospedaje'];

  services: PetService[] = [
    {
      id: 1,
      name: 'Veterinaria Central',
      category: 'Salud',
      description: 'Atención médica integral para todo tipo de mascotas.',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800',
      price: '$45.00'
    },
    {
      id: 2,
      name: 'Spa & Grooming',
      category: 'Estética',
      description: 'Peluquería, baño y mimos para tu mejor amigo.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
      price: '$30.00'
    },
    {
      id: 3,
      name: 'Entrenamiento Canino',
      category: 'Educación',
      description: 'Cursos de obediencia y socialización.',
      image: 'https://images.unsplash.com/photo-1541888941255-245459b5643a?auto=format&fit=crop&q=80&w=800',
      price: '$60.00'
    },
    {
      id: 4,
      name: 'Pet Hotel',
      category: 'Hospedaje',
      description: 'El mejor lugar para que tu mascota se quede mientras viajas.',
      image: 'https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=800',
      price: '$25.00/día'
    }
  ];

  get filteredServices() {
    return this.services.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                           s.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'Todos' || s.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  toggleFavorite(event: Event, id: number) {
    event.preventDefault();
    event.stopPropagation();
    this.favoritesService.toggleFavorite(id);
  }

  isFavorite(id: number) {
    return this.favoritesService.isFavorite(id);
  }

  submitContact() {
    if (this.contactName && this.contactEmail && this.contactMessage) {
      console.log('Mensaje enviado:', { name: this.contactName, email: this.contactEmail, message: this.contactMessage });
      this.isSubmitted = true;
      // Reset form after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        this.contactName = '';
        this.contactEmail = '';
        this.contactMessage = '';
      }, 3000);
    }
  }
}
