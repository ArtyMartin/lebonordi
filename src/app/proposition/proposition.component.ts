import { Component } from '@angular/core';
import ComputerJson from '../computer.json';

interface COMPUTER {
nom: string;
prix: number;
image: string;
}


@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css'],
})
export class PropositionComponent {
  computer: COMPUTER[] = ComputerJson;
}
