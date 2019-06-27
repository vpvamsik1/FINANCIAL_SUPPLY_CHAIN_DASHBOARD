import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/layout/body/body.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ConsolidatedScreensComponent } from './components/pages/consolidated-screens/consolidated-screens.component';

const routes: Routes = [

  { path: '', component: BodyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consolidatedscreens', component: ConsolidatedScreensComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
