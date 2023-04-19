import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropositionComponent } from './proposition/proposition.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
   {path: 'propositions', component: PropositionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
