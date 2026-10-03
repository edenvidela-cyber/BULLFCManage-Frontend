import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-form.html',
  styleUrls: ['./player-form.css']
})
export class PlayerForm {
  // Model mapping exactly to the required Manager fields for POST /api/managers
  managerProfile = {
    fullName: '',
    age: null as number | null,
    hourlyRate: null as number | null,
    isActive: true,
    joinDate: new Date().toISOString().split('T')[0], // Default to today's date
    skills: '',
    city: '',
    country: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:5000/api/managers', this.managerProfile)
      .subscribe({
        next: (response) => {
          alert('🎮 Manager Profile Created and Loaded into Database!');
          this.resetForm();
        },
        error: (err) => {
          console.error('Error saving manager profile:', err);
          alert('Failed to save profile. Make sure the backend server is active on Port 5000!');
        }
      });
  }

  resetForm() {
    this.managerProfile = {
      fullName: '',
      age: null,
      hourlyRate: null,
      isActive: true,
      joinDate: new Date().toISOString().split('T')[0],
      skills: '',
      city: '',
      country: ''
    };
  }
}