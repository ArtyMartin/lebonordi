import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


interface Computer {
  marque: string;
  nom: string;
  type: string;
  ecran: { taille: number, type: string, dpi: number } | null;
  clavier: { chiclet: boolean, retroeclairage: boolean, type: string, "pave-num": boolean } | null;
  system: {
    ram: number;
    cpu: {
      marque: string;
      nom: string;
      score: number;
      core: number;
      "frequence-max": number;
      tdp: number;
    };
    hdd: {
      capacite: number;
      type: string;
      rpm: number | null;
      "vitesse-transfert": number;
    };
    cg: {
      marque: string;
      modele: string;
      score: number;
    };
  };
  batterie: { capacite: number, autonomie: number } | null;
  prix: number;
}



@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent {


  @Input()
  public cardComputer: Computer;


  constructor(
    private route: ActivatedRoute,
  ){ }

}
