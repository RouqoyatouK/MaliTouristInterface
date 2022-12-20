import { Component, OnInit } from '@angular/core';
import { AnneesService } from 'src/app/Services/annees.service';
import { NomregionService } from 'src/app/Services/nomregion.service';
import { PaysService } from 'src/app/Services/pays.service'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
  //pays ajout
  nompays: any;
  supperficie: any;


  AjoutduPays(){
    this.paysService.AjouterPays(this.nompays, this.supperficie).subscribe(data => {

      console.log(this.nompays);
      console.log(data);
    })
  }

  //Ajouter Annee
  date: any;

    //AfficherPays
paysliste: any;

  AjoutDuAnne(){
    this.anneesService.AjouterAnnee(this.date).subscribe(data => {
      console.log(data)
    })
  }

//uuuuuuuuuuuuuuuuuuuuuuuuuuuuu Ajouter NomRegion
 nom: any;
 superfie: any ;
 coderegion: any ;
 activite: any ;
 pays: any;


 AjouterLeNomRegion(){
  this.nomRegion.AjouterNomRegion(this.nom, this.superfie, this.coderegion, this.activite, this.pays).subscribe(data =>{

  })
 }









  constructor(private paysService: PaysService, private anneesService: AnneesService, private nomRegion: NomregionService) { }

  ngOnInit() {
    console.log()
    this.paysService.AfficherPays().subscribe(data =>{
      this.paysliste= data;
    })
  }


}



