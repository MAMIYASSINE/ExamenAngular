import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvoitureComponent } from './componnent/addvoiture/addvoiture.component';
import { ListvoitureComponent } from './componnent/listvoiture/listvoiture.component';
import { UpdatevoitureComponent } from './componnent/updatevoiture/updatevoiture.component';

const routes: Routes = [
  {path:"",component:ListvoitureComponent},
  {path:"add",component:AddvoitureComponent},
  {path:"update/:id",component:UpdatevoitureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
