import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PropositionComponent } from './proposition/proposition.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
   {path: 'propositions', component: PropositionComponent },
   {path: 'questionaire', component: QuestionnaireComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}


