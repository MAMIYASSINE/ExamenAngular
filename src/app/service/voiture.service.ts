import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  
  url="http://localhost:3000/voitures";
  constructor(private http:HttpClient ) { }
  getvoitures(){
    return this.http.get(this.url);
  }
  addvoitures(data:any){

    console.log(data);
    return this.http.post(this.url,data);
  }
  deletevoiture(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  getvoiture(id:any){
    return this.http.get(this.url,id);
  }
  
}
