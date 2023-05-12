import { Component } from '@angular/core';

interface Questionnaire {
  number: number;
  question: string;
  reponses: string[];
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})


export class QuestionnaireComponent {
  public questionnaire: Questionnaire[] = [];

  constructor() {
    const question: Questionnaire = {
      number: 1,
      question : "Voulez-vous un ordinateur pour jouer aux jeux vidéos ?",
      reponses: [
        "Oui, avec des graphismes en élevé",
        "Oui, avec des graphismes en moyen",
        "Oui, avec des graphismes en faible",
        "Non"
      ]
    };
    this.questionnaire.push(question);
  }
}