import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedTableComponent } from './components/nested-table/nested-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: NestedTableComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
