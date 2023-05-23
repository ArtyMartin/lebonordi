import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropositionComponent } from './proposition/proposition.component';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PanierComponent } from './panier/panier.component';
import { CardPanierComponent } from './card-panier/card-panier.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropositionComponent,
    HomeComponent,
    QuestionnaireComponent,
    PanierComponent,
    CardPanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
