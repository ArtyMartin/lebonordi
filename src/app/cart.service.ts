import { Injectable } from '@angular/core';


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



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private computers: Computer[] = [];

  add(computer: Computer){
    this.computers.push(computer);
  }

  length(){
    return this.computers.length;
  }

  get(){
    return this.computers;
  }

  

  constructor() { }
}
