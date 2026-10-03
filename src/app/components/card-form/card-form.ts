import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-form.html',
  styleUrls: ['./card-form.css']
})
export class CardForm {
  // Bindings for main player properties
  name: string = '';
  photoUrl: string = '';
  position: string = 'ST';
  ovr: number = 75;

  // Outfield Stats Model
  outfieldStats = { pac: 75, sho: 75, pas: 75, dri: 75, def: 75, phy: 75 };
  
  // Goalkeeper Stats Model
  gkStats = { div: 75, han: 75, kic: 75, ref: 75, spe: 75, pos: 75 };

  // Helper arrays for looping forms neatly using Angular's new @for control flow
  outfieldKeys: (keyof typeof this.outfieldStats)[] = ['pac', 'sho', 'pas', 'dri', 'def', 'phy'];
  gkKeys: (keyof typeof this.gkStats)[] = ['div', 'han', 'kic', 'ref', 'spe', 'pos'];

  constructor(private http: HttpClient) {}

onSubmit() {
  const finalStats = this.position === 'GK' ? this.gkStats : this.outfieldStats;
  
  // If the photo link is empty, automatically assign the fallback asset path
  const finalPhotoUrl = this.photoUrl.trim() ? this.photoUrl : 'assets/Error silhoutte.png';

  const payload = {
    name: this.name,
    photoUrl: finalPhotoUrl,
    position: this.position,
    ovr: Number(this.ovr),
    stats: finalStats
  };

  this.http.post('http://localhost:5000/api/cards', payload)
    .subscribe({
      next: (response) => {
        alert('🎯 Card Successfully Rendered and Saved into MongoDB!');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error saving player card:', err);
        alert('Failed to save card. Verify backend server is running on Port 5000.');
      }
    });
}resetForm() {
    this.name = '';
    this.photoUrl = '';
    this.position = 'ST';
    this.ovr = 75;
    this.outfieldStats = { pac: 75, sho: 75, pas: 75, dri: 75, def: 75, phy: 75 };
    this.gkStats = { div: 75, han: 75, kic: 75, ref: 75, spe: 75, pos: 75 };
  }

}