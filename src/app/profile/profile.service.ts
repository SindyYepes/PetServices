import { Injectable, signal } from '@angular/core';

export interface UserProfile {
  name: string;
  petName: string;
  breed: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = signal<UserProfile>({
    name: 'Christian Camilo Gualteros',
    petName: 'Toby',
    breed: 'Golden Retriever',
    location: 'Bogotá, Colombia',
    email: 'ccgualterosf@unal.edu.co',
    phone: '+57 313 377 6590',
    bio: 'Amante de los peludos 🐾. Toby es mi mejor amigo y nos encanta salir a correr por el parque.'
  });

  updateProfile(newProfile: UserProfile) {
    this.profile.set(newProfile);
  }
}
