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
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
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

    this.formSubmitted = true;
    // display form values on success
    setTimeout(() => {
      window.location.href = './home';
    }, 2000);
  }
}
