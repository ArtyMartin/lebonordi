import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formulaire: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }
  

  envoyerFormulaire() {
    if (this.formulaire.valid) {
      // Logique pour envoyer le formulaire
  
      // Redirection vers la page d'accueil
      window.location.href = './home';
    } else {
      alert('Veuillez remplir correctement tous les champs');
    }
  }
}

