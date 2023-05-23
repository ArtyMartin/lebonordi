import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  constructor(
    public cart: CartService
  ){
    
  }

}
