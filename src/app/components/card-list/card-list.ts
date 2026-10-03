import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface PlayerCard {
  _id?: string;
  name: string;
  photoUrl: string;
  position: string;
  ovr: number;
  stats: Record<string, number>;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.html',
  styleUrls: ['./card-list.css']
})
export class CardList implements OnInit {
  players: PlayerCard[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  
  // Point this directly to your newly added asset
  defaultAvatar: string = 'assets/Error silhoutte.png';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.http.get<PlayerCard[]>('http://localhost:5000/api/cards')
      .subscribe({
        next: (data) => {
          this.players = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching player cards:', err);
          this.errorMessage = 'Could not retrieve database vault records.';
          this.isLoading = false;
        }
      });
  }

  // Fallback handler if the photo URL fails to load
  handleImageError(event: any): void {
    event.target.src = this.defaultAvatar;
  }

  getStatKeys(stats: Record<string, number>): string[] {
    return Object.keys(stats);
  }
}