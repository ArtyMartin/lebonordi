import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


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



@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent {


  change(value: string){
    console.log(value);
    
  }


  @Input()
  public cardComputer: Computer;

  @Input()
  public quantity: number = 0;


  constructor(
    private route: ActivatedRoute,
    public cart: CartService
  ){ }


  onQuantityChange(){
    
    if(this.quantity > this.cart.getQuantity(this.cardComputer.nom)){
      this.cart.addOne(this.cardComputer.nom)
    }else{
      this.cart.removeOne(this.cardComputer.nom)
    }
    
  }

}
