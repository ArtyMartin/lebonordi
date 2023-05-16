import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Questionnaire {
  number: number;
  question: string;
  reponses: string[];
  makeResponse: Function;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})


export class QuestionnaireComponent {

  public questionnaire: Questionnaire[] = [];
  public selectedOption: string = "0";
  public indexQuestion: number = 0;
  

  public isLaptop: boolean;
  public cptProc: number = 0;
  public cptGpu: number = 0;
  public cptRam: number = 0;
  public cptHdd: number = 0;


  constructor(
    private router: Router
  ) {

    const question1: Questionnaire = {
      number: 1,
      question : "Voulez-vous un ordinateur fixe ou portable ?",
      reponses: [
        "un ordinateur fixe",
        "un ordinateur portable",
      ],
      makeResponse : ()=>{
       
        switch (this.selectedOption) {
          
          case "0":
            this.isLaptop = false;
            break;

          case "1":
            this.isLaptop = true;
            break;
        }

        this.indexQuestion++;
        this.selectedOption = "0";

      }
    };
    this.questionnaire.push(question1);

    const question2: Questionnaire = {
      number: 3,
      question : "Voulez-vous un ordinateur pour réaliser des tâches de bureautique ?",
      reponses: [
        "Oui, c'est mon activité principal",
        "Oui",
        "Non"
      ],
      makeResponse : ()=>{
        
        switch (this.selectedOption) {
          
          case "0":
          case "1":
            this.cptProc ++;
            break;

        }

        this.indexQuestion++;
        this.selectedOption = "0";
      }
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
      ],
      makeResponse : ()=>{
        switch (this.selectedOption) {
          
          case "0":
            this.cptProc++;
            this.cptGpu += 2;
            this.cptRam ++;
            this.cptHdd+=2;
            break;

          case "1":
            this.cptProc++;
            this.cptGpu ++;
            this.cptRam ++;
            this.cptHdd ++;
            break;

          case "2":
            this.cptProc++;
            this.cptGpu ++;
            break;

        }

        this.indexQuestion++;
        this.selectedOption = "0";
      }
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
      ],
      makeResponse : ()=>{
        switch (this.selectedOption) {
          
          case "0":
            this.cptProc += 2;
            this.cptGpu += 2;
            this.cptRam ++;
            this.cptHdd += 2;
            break;

          case "1":
            this.cptProc += 2;
            this.cptGpu += 2;
            this.cptRam ++;
            this.cptHdd++;
            break;

          case "2":
            this.cptProc ++;
            this.cptGpu ++;
              break;

        }

        this.indexQuestion++;
        this.selectedOption = "0";

      }
    };
    this.questionnaire.push(question4);


    const question5: Questionnaire = {
      number: 5,
      question : "Voulez-vous un ordinateur pour stocker plein de fichiers (photos, vidéo, jeux vidéo) ?",
      reponses: [
        "Oui, c’est mon activité principal",
        "Oui",
        "Non"
      ],
      makeResponse : ()=>{
        
        switch (this.selectedOption) {
          
          case "0":
            this.cptHdd += 2;
            break;

          case "1":
            this.cptHdd++;
            break;

        }
        this.router.navigate(["/propositions"], { queryParams :{ 
            isLaptop: this.isLaptop,
            cptProc: this.cptProc,
            cptGpu: this.cptGpu,
            cptRam: this.cptRam,
            cptHdd: this.cptHdd
          }
        })

      }
    };
    this.questionnaire.push(question5);

    
  }
}
