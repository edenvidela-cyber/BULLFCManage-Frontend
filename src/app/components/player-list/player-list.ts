import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface ManagerProfile {
  _id?: string;
  fullName: string;
  age: number;
  hourlyRate: number;
  isActive: boolean;
  joinDate: string;
  skills: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-list.html',
  styleUrls: ['./player-list.css']
})
export class PlayerList implements OnInit {
  managers: ManagerProfile[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchManagers();
  }

  fetchManagers(): void {
    this.http.get<ManagerProfile[]>('http://localhost:5000/api/managers')
      .subscribe({
        next: (data) => {
          this.managers = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching manager profiles:', err);
          this.errorMessage = 'Could not load profiles. Is your local API running on Port 5000?';
          this.isLoading = false;
        }
      });
  }
}