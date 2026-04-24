import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService, UserProfile } from './profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  private profileService = inject(ProfileService);
  
  profile = this.profileService.profile;
  isEditing = signal(false);
  
  // Edit form state
  editForm: UserProfile = { ...this.profile() };

  startEdit() {
    this.editForm = { ...this.profile() };
    this.isEditing.set(true);
  }

  cancelEdit() {
    this.isEditing.set(false);
  }

  saveProfile() {
    this.profileService.updateProfile(this.editForm);
    this.isEditing.set(false);
  }
}
