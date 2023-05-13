import { Component } from '@angular/core';
@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css'],
})
export class PropositionComponent {
  computers = [
    {
      nom: 'Ordinateur 1',
      prix: 999,
      image: 'chemin'
    },
    {
      nom: 'Ordinateur 2',
      prix: 1499,
      image: 'chemin'
    },
    {
      nom: 'Ordinateur 3',
      prix: 1500,
      image: 'chemin'
    },
    {
      nom: 'Ordinateur 4',
      prix: 1500,
      image: 'chemin'
    }
    // Ajoutez d'autres ordinateurs ici
  ];
}
