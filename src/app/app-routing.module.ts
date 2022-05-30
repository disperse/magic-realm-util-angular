import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent} from "./home-view/home-view.component";
import { RulesViewComponent} from "./rules-view/rules-view.component";
import { ScoreViewComponent} from "./score-view/score-view.component";

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'score', component: ScoreViewComponent },
  { path: 'rules', component: RulesViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
