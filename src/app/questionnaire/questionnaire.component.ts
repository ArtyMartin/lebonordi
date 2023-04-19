import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  public questionnaire: JSON[] = [];

  constructor() {
    const question = {
      number: 1,
      questions: [
        "Oui, avec des graphismes en élevé",
        "Oui, avec des graphismes en moyen",
        "Oui, avec des graphismes en faible",
        "Non"
      ]
    };
    this.questionnaire.push(JSON.parse(JSON.stringify(question)));
  }
}
