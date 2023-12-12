import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/service/voiture.service';

@Component({
  selector: 'app-listvoiture',
  templateUrl: './listvoiture.component.html',
  styleUrls: ['./listvoiture.component.css']
})
export class ListvoitureComponent implements OnInit{
  constructor(private voiture:VoitureService){}
  ngOnInit(): void {
    this.voiture.getvoitures()
  }

}
