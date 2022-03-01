import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstctsListComponent } from './contacts/constcts-list/constcts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contacts' },
  { path: 'contacts', component: ConstctsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
