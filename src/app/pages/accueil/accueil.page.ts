import { Component, OnInit } from '@angular/core';
import { AccueilService } from 'src/app/Services/accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  afficherRegion:any;

  constructor(private accueilService: AccueilService) { }

  ngOnInit() {
    console.log("-------------")
    this.accueilService.getRegion().subscribe(data=>{
      this.afficherRegion= data;
      console.log("---------------------------");
      console.log(data)
    })
  }

}
