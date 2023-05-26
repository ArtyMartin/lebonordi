import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  public ville: string = "";
  public codePostal: string = "";
  public adresse: string = "";
  public mail: string = "";
  public telephone: string = "";
  public errorNotif: string[] = ["","","","",""];

  constructor(
    public cart: CartService,
    private router: Router
  ){

    
  }

  public pay(){

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    const telephoneRegex = /^\d{10}$/;
    let send : boolean = true;
    
    if( !emailRegex.test(this.mail) ){
      this.errorNotif[3] = "Le mail doit être du format xxx@xxx.xx ! \n";
      send = false;
    }

    if( !emailRegex.test(this.telephone)){
      this.errorNotif[4] = "Le numéro de téléphone doit être sous la forme de 10 chiffres !";
      send = false;
    }
    

    if(this.ville == ""){
      this.errorNotif[0] = "Ce champs est obligatoire !";
      send = false;
    }

    if(this.codePostal == ""){
      this.errorNotif[1] = "Ce champs est obligatoire !";
      send = false;
    }

    if(this.adresse == ""){
      this.errorNotif[2] = "Ce champs est obligatoire !";
      send = false;
    }

    if(this.mail == ""){
      this.errorNotif[3] += "Ce champs est obligatoire !";
      send = false;
    }

    if(this.telephone == ""){
      this.errorNotif[4] += "Ce champs est obligatoire !";
      send = false;
    }


    if(this.cart.get().length > 0 && send){
      //this.cart.clear()
      //this.router.navigate(["/home"]);
    }
    
  }

}
