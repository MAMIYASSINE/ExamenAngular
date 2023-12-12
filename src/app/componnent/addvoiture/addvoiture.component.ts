import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addvoiture',
  templateUrl: './addvoiture.component.html',
  styleUrls: ['./addvoiture.component.css']
})
export class AddvoitureComponent {
  

    
  constructor(){}
  myform=new FormGroup(
  id:new FormControl(''),
  titre:new FormControl(''),
  description:new FormControl(''),
  Date:new FormControl('')
);


}
