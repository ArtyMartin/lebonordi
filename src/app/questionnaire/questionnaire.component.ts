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

    const question1: Questionnaire = {
      number: 1,
      question : "Voulez-vous un ordinateur fixe ou portable ?",
      reponses: [
        "un ordinateur fixe",
        "un ordinateur portable",
      ]
    };
    this.questionnaire.push(question1);

    const question2: Questionnaire = {
      number: 3,
      question : "Voulez-vous un ordinateur pour réaliser des tâches de bureautique ?",
      reponses: [
        "Oui, c'est mon activité principal",
        "Oui",
        "Non"
      ]
    };
    this.questionnaire.push(question2);

    const question3: Questionnaire = {
      number: 3,
      question : "Voulez-vous un ordinateur pour jouer aux jeux vidéos ?",
      reponses: [
        "Oui, avec des graphismes en élevé",
        "Oui, avec des graphismes en moyen",
        "Oui, avec des graphismes en faible",
        "Non"
      ]
    };
    this.questionnaire.push(question3);


    const question4: Questionnaire = {
      number: 4,
      question : "Voulez-vous un ordinateur pour réaliser de l’édition de photos / vidéos ?",
      reponses: [
        "Oui, pour les 2",
        "Oui, mais seulement de la vidéo",
        "Oui, mais seulement de la photo",
        "Non"
      ]
    };
    this.questionnaire.push(question4);


    const question5: Questionnaire = {
      number: 5,
      question : "Voulez-vous un ordinateur pour stocker plein de fichiers (photos, vidéo, jeux vidéo) ?",
      reponses: [
        "Oui, c’est mon activité principal",
        "Oui",
        "Non"
      ]
    };
    this.questionnaire.push(question5);

    console.log(this.questionnaire[0]);
    

    
  }
}