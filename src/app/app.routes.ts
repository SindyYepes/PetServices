import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];
