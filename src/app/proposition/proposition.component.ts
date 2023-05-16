import { Component, Input, OnInit } from '@angular/core';
import ComputerJson from '../computer.json';
import { ActivatedRoute } from '@angular/router';

interface COMPUTER {
nom: string;
prix: number;
image: string;
}

interface Computer {
  marque: string;
  nom: string;
  type: string;
  ecran: { taille: number, type: string, dpi: number } | null;
  clavier: { chiclet: boolean, retroeclairage: boolean, type: string, "pave-num": boolean } | null;
  system: {
    ram: number;
    cpu: {
      marque: string;
      nom: string;
      score: number;
      core: number;
      "frequence-max": number;
      tdp: number;
    };
    hdd: {
      capacite: number;
      type: string;
      rpm: number | null;
      "vitesse-transfert": number;
    };
    cg: {
      marque: string;
      modele: string;
      score: number;
    };
  };
  batterie: { capacite: number, autonomie: number } | null;
  prix: number;
}



@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css'],
})
export class PropositionComponent {
  public computer: COMPUTER[] = ComputerJson;

  @Input()
  public isLaptop: boolean;
  @Input()
  public cptProc: number;
  @Input()
  public cptGpu: number;
  @Input()
  public cptRam: number;
  @Input()
  public cptHdd: number;

  public filteredComputers: Computer[];


  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit() {
    
    this.isLaptop = this.route.snapshot.queryParams['isLaptop'];
    this.cptProc = this.route.snapshot.queryParams['cptProc'];
    this.cptGpu = this.route.snapshot.queryParams['cptGpu'];
    this.cptRam = this.route.snapshot.queryParams['cptRam'];
    this.cptHdd = this.route.snapshot.queryParams['cptHdd'];

    const computers: Computer[] = ComputerJson;

    this.filteredComputers = computers
      .filter((computer) => computer.type === (this.isLaptop?'portable':'fixe'))
      .filter((computer) => computer.system.ram >= (this.cptRam*4) )
      .filter((computer) => computer.system.cpu.core >= (this.cptProc*2) )
      .filter((computer) => computer.system.cg.score >= (this.cptGpu*100) )
      .filter((computer) => computer.system.hdd.capacite >= (this.cptHdd * 50))
    
    
    console.log(this.filteredComputers);
  }
}
