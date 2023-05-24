import { Injectable } from '@angular/core';


interface Computer {
  marque: string;
  image: string;
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

interface quantity {
  computer: Computer;
  quantity: number;
}



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private computers: quantity[] = [];
  private quantity: number = 0;

  add(computer: Computer){

    let isChange = false;

    this.computers.forEach((element) => {

      if(element.computer.nom == computer.nom){
        element.quantity++;
        isChange = true;
      }

    })

    if (!isChange) {
      this.computers.push({"computer" : computer, "quantity" : 1});
    }

    
  }

  length(){

    let length: number = 0;

    this.computers.forEach((computer) => {
      length += computer.quantity;
    })

    return length;
  }

  get(){
    return this.computers;
  }

  getQuantity(nameOfComputer: string){

    this.quantity = 0;

    this.computers.forEach((computer)=>{

      if(computer.computer.nom == nameOfComputer){
        this.quantity = computer.quantity
      }
    })   

    return this.quantity;
  }

  removeOne(nameOfComputer: string){

    this.computers.map((element)=>{
      
      if (element.computer.nom == nameOfComputer) {
        element.quantity -= 1;
      }
    })
  }

  

  constructor() { }
}
