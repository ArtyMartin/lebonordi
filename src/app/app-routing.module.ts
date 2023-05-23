import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropositionComponent } from './proposition/proposition.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { CartService } from './cart.service';

const routes: Routes = [
  {path: '*', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'propositions', component: PropositionComponent },
  {path: 'questionaire', component: QuestionnaireComponent },
  {path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(
    cart: CartService
  ){

  }


}


