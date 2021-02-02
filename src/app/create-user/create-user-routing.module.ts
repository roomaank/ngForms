import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {
    path: 'create-user', component: CreateUserComponent
  },
  {
    path: 'edit-user/:id', component: CreateUserComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateUserRoutingModule { }
