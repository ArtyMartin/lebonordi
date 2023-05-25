import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formulaire: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      sujet: ['', Validators.required],
      contenu: ['', Validators.required],
    });
  }
  get f() { return this.formulaire.controls; }
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulaire.invalid) {
      return;
    }

    // display form values on success
    setTimeout(() => {
      window.location.href = './home';
    }, 3000);
}

onReset() {
    this.submitted = false;
    this.formulaire.reset();
}
}

